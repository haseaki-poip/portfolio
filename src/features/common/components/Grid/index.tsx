import React from "react";
import styles from "./style.module.scss";

type Props = {
  children: React.ReactNode;
  centered?: boolean;
  listSize?: "small" | "medium" | "large";
};

const Grid = ({ children, centered = false, listSize = "medium" }: Props) => {
  // Gridに渡された子要素がliタグでなければliで囲む
  const wrappedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === "li") {
      return child;
    }
    return <li key={index}>{child}</li>;
  });

  return (
    <ul
      className={`${styles.grid} ${centered ? styles["grid--centered"] : ""} ${
        listSize ? styles[`grid--${listSize}`] : ""
      }`}
    >
      {wrappedChildren}
    </ul>
  );
};

export default Grid;
