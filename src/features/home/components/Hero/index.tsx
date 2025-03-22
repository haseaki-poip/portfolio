import Image from "next/image";
import styles from "./style.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__text_area}>
        <div className={styles.hero__text_area_inner}>
          <h1 className={styles.hero__title}>My Portfolio</h1>
          <p className={styles.hero__description}>
            created by <span>Akito Hasegawa</span>
          </p>
        </div>
      </div>
      <div className={styles.hero__image_area}>
        <div className={styles.hero__image_wrapper}>
          <Image
            src="/images/hero.png"
            alt="hero image"
            fill
            className={styles.hero__image}
            loading="eager"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
