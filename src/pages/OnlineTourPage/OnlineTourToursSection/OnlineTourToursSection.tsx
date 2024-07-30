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
        После выбора начальной точки вы сможете свободно перемещаться между
        различными локациями без необходимости возвращаться на начальную
        страницу. Погружайтесь в историческую атмосферу усадьбы Суйда и
        наслаждайтесь виртуальным путешествием по значимым местам.
      </p>
    </section>
  );
};

export default OnlineTourToursSection;
