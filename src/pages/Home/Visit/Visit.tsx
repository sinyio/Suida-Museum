import styles from "./Visit.module.css";
import pagesCss from "../../Pages.module.css";
import { FC } from "react";
import mapImage from "../../../assets/map.svg";

const Visit: FC = () => {
  return (
    <section>
      <h2 className={pagesCss.sectionTitle}>Как попасть</h2>
      <div className={styles.wrapper}>
        <div className={styles.visitLeft}>
          <img src={mapImage} alt="Карта" />
        </div>
        <div className={styles.visitRight}>
          <div className={styles.rightTopWrapper}>
            <div className={styles.addressBlock}>
              <h3 className={styles.innerTitle}>Адрес:</h3>
              <p className={pagesCss.description}>
                Ленинградская область, Гатчинский район, посёлок Суйда, ул.
                Центральная, 1
              </p>
            </div>
            <div className={styles.scheduleBlock}>
              <h3 className={styles.innerTitle}>Режим работы:</h3>
              <p className={pagesCss.description}>
                Вт - Вс 10:00 - 17:00 (касса до 16:30)
              </p>
              <p className={pagesCss.description}>Пн - выходной</p>
            </div>
          </div>
          <div className={styles.rightBottomWrapper}>
            <div className={styles.warningBlock}>
              <h3 className={styles.innerTitle}>Обратите внимание:</h3>
              <p className={pagesCss.description}>
                Заказ экскурсии по музею и территории усадьбы только по
                предварительной записи
              </p>
            </div>
            <button className={styles.innerButton}>Записаться</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
