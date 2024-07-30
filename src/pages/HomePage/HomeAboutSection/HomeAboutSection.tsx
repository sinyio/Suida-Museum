import styles from "./HomeAboutSection.module.css";
import pagesCss from "../../Pages.module.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import collage from "../../../assets/collages/Collage-about.png";
import { useTranslation } from "react-i18next";

const HomeAboutSection: FC = () => {
  const { t } = useTranslation("mainPage");

  return (
    <section className={styles.aboutSection}>
      <div className={styles.wrapper}>
        <div className={styles.aboutLeft}>
          <h2 className={`${pagesCss.sectionTitle} ${styles.title}`}>
            {t("about.title")}
          </h2>
          <p className={`${pagesCss.description} ${styles.text}`}>
            {t("about.description")}
          </p>
          <Link className={pagesCss.link} to="/about">
            {t("about.link")}
          </Link>
        </div>
        <div className={styles.aboutRight}>
          <img src={collage} alt="Коллаж" />
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
