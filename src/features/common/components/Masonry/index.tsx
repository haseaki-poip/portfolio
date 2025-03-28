import React, { useEffect, useMemo, useState } from "react";
import styles from "./style.module.scss";
type Props = {
  children: React.ReactNode;
  breakpointColumns?: {
    [key: string]: number;
  };
  gap?: number;
};

const Masonry = ({ children, breakpointColumns, gap }: Props) => {
  const [columnsCount, setColumnsCount] = useState<number>();

  // ブレークポイントを昇順で取得
  const breakpoints = useMemo(() => {
    if (!breakpointColumns) return [];
    return Object.keys(breakpointColumns)
      .map(Number)
      .sort((a, b) => a - b);
  }, [breakpointColumns]);

  useEffect(() => {
    // ウィンドウサイズ変更時の処理
    const handleResize = () => {
      if (!breakpointColumns) {
        setColumnsCount(1);
        return;
      }

      const windowWidth = window.innerWidth;

      let newColumnsCount = 1;

      // 適切な列数を決定
      breakpoints.forEach((breakpoint) => {
        if (windowWidth >= breakpoint) {
          newColumnsCount = breakpointColumns[breakpoint];
        }
      });

      setColumnsCount(newColumnsCount);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoints, breakpointColumns]);

  return (
    <div className={styles.masonry} style={gap ? { gap: `${gap}px` } : {}}>
      {columnsCount && (
        <>
          {Array.from({ length: columnsCount }).map((_, columnsIndex) => (
            <div
              key={columnsIndex}
              className={styles.masonry__column}
              style={gap ? { gap: `${gap}px` } : {}}
            >
              {React.Children.toArray(children).filter(
                (_, childrenIndex) =>
                  childrenIndex % columnsCount === columnsIndex % columnsCount
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Masonry;
