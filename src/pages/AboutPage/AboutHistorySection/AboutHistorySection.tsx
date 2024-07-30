import styles from "./AboutHistorySection.module.css";
import pagesCSS from "../../Pages.module.css";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const AboutHistorySection: FC = () => {
  const { t } = useTranslation("aboutPage");

  return (
    <section>
      <div className={styles.wrapper}>
        <h2 className={`${pagesCSS.sectionTitle} ${styles.title}`}>
          {t("history.title")}
        </h2>
        <div className={styles.textBlock}>
          <p className={pagesCSS.description}>{t("history.description1")}</p>
          <p className={pagesCSS.description}>{t("history.description2")}</p>
          <p className={pagesCSS.description}>{t("history.description3")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHistorySection;
