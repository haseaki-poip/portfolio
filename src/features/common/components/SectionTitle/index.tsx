import styles from "./style.module.scss";

type Props = {
  title: string;
};
const SectionTitle = ({ title }: Props) => {
  return (
    <div className={styles.title_wrapper}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
