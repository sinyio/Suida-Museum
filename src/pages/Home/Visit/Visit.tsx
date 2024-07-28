import styles from "./Visit.module.css";
import pagesCss from "../../Pages.module.css";
import { FC } from "react";
import mapImage from "../../../assets/map.svg";
import { useTranslation } from "react-i18next";

const Visit: FC = () => {
  const { t } = useTranslation("mainPage");

  return (
    <section>
      <h2 className={pagesCss.sectionTitle}>{t("visit.title")}</h2>
      <div className={styles.wrapper}>
        <div className={styles.visitLeft}>
          <img src={mapImage} alt="Карта" />
        </div>
        <div className={styles.visitRight}>
          <div className={styles.rightTopWrapper}>
            <div className={styles.addressBlock}>
              <h3 className={styles.innerTitle}>{t("visit.addressTitle")}</h3>
              <p className={pagesCss.description}>{t("visit.address")}</p>
            </div>
            <div className={styles.scheduleBlock}>
              <h3 className={styles.innerTitle}>{t("visit.scheduleTitle")}</h3>
              <p className={pagesCss.description}>{t("visit.scheduleOpen")}</p>
              <p className={pagesCss.description}>
                {t("visit.scheduleClosed")}
              </p>
            </div>
          </div>
          <div className={styles.rightBottomWrapper}>
            <div className={styles.warningBlock}>
              <h3 className={styles.innerTitle}>{t("visit.warningTitle")}</h3>
              <p className={pagesCss.description}>{t("visit.warning")}</p>
            </div>
            <button className={styles.innerButton}>
              {t("visit.buttonText")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
