import styles from "./style.module.scss";

type Props = {
  title: string;
  description?: string;
};
const SectionTitle = ({ title, description }: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default SectionTitle;
