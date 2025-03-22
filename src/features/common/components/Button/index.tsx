import React from "react";
import styles from "./style.module.scss";
type BaseProps = {
  children: React.ReactNode;
  radius?: "normal" | "full";
  size?: "small" | "medium" | "large";
};

type Props<T extends "button" | "a"> = BaseProps & {
  as: T;
} & (T extends "button"
    ? { onClick: () => void; href?: never }
    : { href: string; onClick?: never });

const Button = <T extends "button" | "a">(props: Props<T>) => {
  const {
    as,
    size = "medium",
    radius = "normal",
    children,
    onClick,
    href,
  } = props;
  const Component = as === "a" ? "a" : "button";

  return (
    <Component
      className={`${styles.button} ${
        radius === "full" ? styles["button--rounded_full"] : ""
      } ${
        size === "small"
          ? styles["button--small"]
          : size === "large"
          ? styles["button--large"]
          : ""
      }`}
      {...(as === "a" ? { href: href } : { onClick: onClick })}
    >
      {children}
    </Component>
  );
};

export default Button;
