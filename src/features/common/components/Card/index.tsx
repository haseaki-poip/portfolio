import Image from "next/image";
import styles from "./style.module.scss";
import Button from "../Button";

type BaseProps = {
  imageUrl: string;
  imageAlt: string;
  title?: string;
  description?: string;
};

type DefaultProps = {
  footerType?: undefined;
  onClick?: never;
  href?: never;
  buttonText?: never;
};

type ButtonProps = {
  footerType: "button";
  onClick: () => void;
  href?: never;
  buttonText: string;
};

type LinkProps = {
  footerType: "link";
  href: string;
  onClick?: never;
  buttonText: string;
};

// 3つのタイプのいずれかを取るProps
type Props = BaseProps & (DefaultProps | ButtonProps | LinkProps);

const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      <figure className={styles.card__image_wrapper}>
        <Image
          src={props.imageUrl}
          alt={props.imageAlt}
          fill
          style={{ objectFit: "contain" }}
        />
      </figure>
      <div className={styles.card__infomation}>
        {props.title && <p className={styles.card__title}>{props.title}</p>}

        {props.description && (
          <p className={styles.card__description}>{props.description}</p>
        )}

        {props.footerType && (
          <div className={styles.card__footer}>
            <Button
              as={props.footerType === "link" ? "a" : "button"}
              {...(props.footerType === "link"
                ? { href: props.href }
                : { onClick: props.onClick })}
              radius="full"
              size="small"
            >
              {props.buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
