import { FC } from "react";
import styles from "./ExhibitsSection.module.css";
import pagesCSS from "../../Pages.module.css";
import collageWedding from "../../../assets/collages/Collage-wedding.png";
import collageHannibal from "../../../assets/collages/Collage-Hannibal.png";
import collageSuyda from "../../../assets/collages/Collage-Suyda.png";
import { useTranslation } from "react-i18next";

const ExhibitsSection: FC = () => {
  const { t } = useTranslation("exhibitsPage");

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.exhibitsLeft}>
          <h2 className={`${pagesCSS.sectionTitle} ${styles.title}`}>
            {t("exhibits.weddingTitle")}
          </h2>
          <p className={`${pagesCSS.description} ${styles.text}`}>
            {t("exhibits.weddingDescription")}
          </p>
        </div>
        <div className={styles.exhibitsRight}>
          <img src={collageWedding} alt="Коллаж" />
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.exhibitsLeft}>
          <img src={collageHannibal} alt="Коллаж" />
        </div>
        <div className={styles.exhibitsRight}>
          <h2 className={`${pagesCSS.sectionTitle} ${styles.title}`}>
            {t("exhibits.hannibalTitle")}
          </h2>
          <p className={`${pagesCSS.description} ${styles.text}`}>
            {t("exhibits.hannibalDescription")}
          </p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.exhibitsLeft}>
          <h2 className={`${pagesCSS.sectionTitle} ${styles.title}`}>
          {t("exhibits.suydaTitle")}
          </h2>
          <p className={`${pagesCSS.description} ${styles.text}`}>
          {t("exhibits.suydaDescription")}
          </p>
        </div>
        <div className={styles.exhibitsRight}>
          <img src={collageSuyda} alt="Коллаж" />
        </div>
      </div>
    </section>
  );
};

export default ExhibitsSection;
