import React from "react";
import styles from "./style.module.scss";
type BaseProps = {
  text: string;
  size?: "xs" | "small" | "medium" | "large" | "xl" | "2xl" | "3xl";
};

type Props<T extends "button" | "a"> = BaseProps & {
  as: T;
} & (T extends "button"
    ? { onClick: () => void; href?: never }
    : { href: string; onClick?: never });

const LinkButton = <T extends "button" | "a">(props: Props<T>) => {
  const { as, text, onClick, href, size = "medium" } = props;
  const Component = as === "button" ? "button" : "a";
  const className = `${styles.link_button} ${styles[`link_button--${size}`]}`;

  return (
    <Component
      className={className}
      {...(as === "a" ? { href: href } : { onClick: onClick })}
    >
      {text}
    </Component>
  );
};

export default LinkButton;
