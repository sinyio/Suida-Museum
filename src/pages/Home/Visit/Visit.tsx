import styles from "./Visit.module.css";
import pagesCss from "../../Pages.module.css";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const apiKey = import.meta.env.VITE_REACT_APP_YANDEX_MAPS_API_KEY;

const Visit: FC = () => {
  const { t } = useTranslation("mainPage");

  return (
    <section>
      <h2 className={pagesCss.sectionTitle}>{t("visit.title")}</h2>
      <div className={styles.wrapper}>
        <div className={styles.visitLeft}>
          <YMaps query={{ apikey: apiKey }}>
            <Map
              defaultState={{ center: [59.466102, 30.124931], zoom: 15 }}
              height="100%"
              width="100%"
            >
              <Placemark geometry={[59.466102, 30.124931]} />
            </Map>
          </YMaps>
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
            <button className={`${pagesCss.buttonLink} ${styles.innerButton}`} >
              {t("visit.buttonText")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
