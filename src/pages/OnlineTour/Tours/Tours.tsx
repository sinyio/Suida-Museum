import pagesCSS from "../../Pages.module.css";
import styles from "./Tours.module.css";
import { FC } from "react";
import TourList from "../../../components/TourList/TourList";

const Tours: FC = () => {
  return (
    <section>
      <h2 className={pagesCSS.sectionTitle}>Туры</h2>
      <div className={styles.wrapper}>
        <TourList />
      </div>
      <p className={pagesCSS.description}>
        После выбора начальной точки в нашем онлайн туре, вы сможете свободно
        перемещаться между различными локациями, не возвращаясь на начальную
        страницу. Просто погрузитесь в историческую атмосферу усадьбы Суйда и
        наслаждайтесь виртуальным путешествием по значимым местам!{" "}
      </p>
    </section>
  );
};

export default Tours;
