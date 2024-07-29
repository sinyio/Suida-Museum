import { FC } from "react";
import styles from "./Hero.module.css";
import pagesCss from "../../Pages.module.css";
import video from "../../../assets/Suyda.mp4";
import { useTranslation } from "react-i18next";

const Hero: FC = () => {
  const { t } = useTranslation("mainPage");

  return (
    <section className={`${pagesCss.heroSection} ${styles.mainHeroSection}`}>
      <div className={styles.heroWrapper}>
        <h1 className={styles.title}>{t("hero.title")}</h1>
        <p className={styles.description}>{t("hero.description")}</p>
      </div>
      <div className={styles.videoWrapper}>
        <video className={styles.video} src={video} muted autoPlay loop></video>
      </div>
    </section>
  );
};

export default Hero;
