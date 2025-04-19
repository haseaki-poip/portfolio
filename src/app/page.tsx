import Hero from "@/features/home/components/Hero";
import styles from "./page.module.scss";
import SectionTitle from "@/features/common/components/SectionTitle";
import Profile from "@/features/home/components/Profile";
import Works from "@/features/home/components/Works";
import Gallery from "@/features/home/components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <section
        className={`${styles.section} ${styles["section--padding_horizontal"]}`}
      >
        <SectionTitle title="Profile" />
        <Profile />
      </section>
      <section
        className={`${styles.section} ${styles["section--padding_horizontal"]}`}
      >
        <SectionTitle title="Works" />
        <Works />
      </section>
      <section
        className={`${styles.section} ${styles["section--padding_horizontal"]}`}
      >
        <SectionTitle
          title="Gallery"
          description="ディズニーにインパした時の写真を都度共有していきます。"
        />
        <Gallery />
      </section>
    </>
  );
}
