import Image from "next/image";
import styles from "./style.module.scss";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__partition_left}>
        <figure className={styles.profile__image_wrapper}>
          <Image
            src={"/images/profile.png"}
            alt="profile image"
            fill
            loading="eager"
            priority
          />
        </figure>
      </div>
      <div className={styles.profile__partition_right}>
        <div className={`${styles.profile__text} ${styles["hp__mx--sp"]}`}>
          <p className={styles.profile__name}>
            <span>長谷川 祥士</span>Hasegawa Akito
          </p>
          <p className={styles.profile__job}>企画・エンジニア</p>
          <p className={styles.profile__introduction}>
            東京のIT企業で働いており、主に自社サービスの企画とエンジニア(FE・BFF)を担当。
            <br></br>
            趣味はディズニーと野球観戦、ハッカソンなどでのプロダクト開発。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
