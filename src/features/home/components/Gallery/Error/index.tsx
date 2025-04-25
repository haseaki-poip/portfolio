"use client";
import LinkButton from "@/features/common/components/LinkButton";
import styles from "./style.module.scss";

type Props = {
  className?: string;
  retry: () => void;
};

const Error = (props: Props) => {
  const { className, retry } = props;
  return (
    <div className={`${styles.error} ${className}`}>
      <p className={styles.error__text}>
        エラーが発生し、写真を読み込むことができませんでした。
      </p>
      <LinkButton as="button" text="再読み込みする" onClick={retry} />
    </div>
  );
};

export default Error;
