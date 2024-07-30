import styles from "./AboutVideoReviewSection.module.css";
import pagesCSS from "../../Pages.module.css";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const AboutVideoReviewSection: FC = () => {
  const { t } = useTranslation("aboutPage");

  return (
    <section className={styles.videoReviewSection}>
      <div className={styles.wrapper}>
        <h2 className={`${pagesCSS.sectionTitle}  ${styles.title}`}>
          {t("videoReview.title")}
        </h2>
        <div className={styles.videoReviewRight}>
          <iframe
            className={styles.videoReview}
            height="542"
            src="https://www.youtube.com/embed/veXl0ckdyzU?si=nOJfUElvuEml8wNf?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p className={pagesCSS.description}>{t("videoReview.description")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutVideoReviewSection;
