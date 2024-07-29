import { FC } from "react";
import styles from "./TourCard.module.css";
import pagesCSS from '../../pages/Pages.module.css'
import { Link } from "react-router-dom";

interface ITourCard {
  id: string;
  title: string;
  description: string;
  img: string;
}

const TourCard: FC<ITourCard> = ({ id, title, description, img }) => {
  return (
    <div className={styles.tourCard}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.imageWrapper}>
        <Link className={styles.link} to={`/tours/${id}`}>
          <div className={styles.imageInnerWrapper}>
            <img className={styles.image} src={img} alt="Тур" />
            <button className={`${pagesCSS.buttonLink} ${styles.startButton}`}>Начать тур</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
