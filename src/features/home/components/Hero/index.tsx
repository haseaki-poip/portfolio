import styles from "./style.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__contents}>
        <div className={styles.hero__contents_inner}>
          <h1 className={styles.hero__title}>My Portfolio</h1>
          <p className={styles.hero__description}>
            created by <span>Akito Hasegawa</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
