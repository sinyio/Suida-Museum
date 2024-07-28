import styles from "./Exhibits.module.css";
import pagesCss from "../../Pages.module.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import collage from "../../../assets/Collage-exhibits.png";

const Exhibits: FC = () => {
  return (
    <section className={styles.exhibitSection}>
      <div className={styles.wrapper}>
        <div className={styles.exhibitsRight}>
          <img src={collage} alt="Коллаж" />
        </div>
        <div className={styles.exhibitsLeft}>
          <h2 className={`${pagesCss.sectionTitle} ${pagesCss.sectionTitleRight} ${styles.title}`}>
            Экспонаты
          </h2>
          <p className={pagesCss.description}>
            В нашем музее представлены уникальные экспонаты, отражающие быт и
            культуру дворянской семьи. Среди них – антикварная мебель, редкие
            книги, предметы искусства и личные вещи владельцев усадьбы, которые
            позволяют погрузиться в историю и почувствовать дух прошедших эпох.
          </p>
          <Link className={pagesCss.link} to="/exhibits">
            Узнать больше
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Exhibits;
