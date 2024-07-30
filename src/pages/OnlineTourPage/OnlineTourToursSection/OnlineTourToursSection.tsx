import pagesCSS from "../../Pages.module.css";
import styles from "./OnlineTourToursSection.module.css";
import { FC } from "react";
import TourList from "../../../components/TourList/TourList";

const OnlineTourToursSection: FC = () => {
  return (
    <section>
      <h2 className={pagesCSS.sectionTitle}>Туры</h2>
      <div className={styles.wrapper}>
        <TourList />
      </div>
      <p className={pagesCSS.description}>
        После выбора локации вы сможете перемещаться по ней.
      </p>
      <p className={pagesCSS.description}>
        Погрузитесь в историческую атмосферу усадьбы Суйда и наслаждайтесь
        виртуальным путешествием по значимым местам!
      </p>
    </section>
  );
};

export default OnlineTourToursSection;
