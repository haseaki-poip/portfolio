import styles from "./style.module.scss";

type Props = {
  children: React.ReactNode;
  centered?: boolean;
  listSize?: "small" | "medium" | "large";
};

const Grid = ({ children, centered = false, listSize = "medium" }: Props) => {
  return (
    <ul
      className={`${styles.grid} ${centered ? styles["grid--centered"] : ""} ${
        listSize ? styles[`grid--${listSize}`] : ""
      }`}
    >
      {children}
    </ul>
  );
};

export default Grid;
