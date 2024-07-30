import { FC } from "react";
import styles from "./ExcursionCard.module.css";
import pagesCSS from "../../pages/Pages.module.css";
import { Link } from "react-router-dom";

interface IExcursionCard {
  id: string;
  title: string;
  description: string;
  img: string;
}

const ExcursionCard: FC<IExcursionCard> = ({ id, title, description, img }) => {
  return (
    <li className={styles.excursionCard}>
      <Link className={styles.link} to={`/visit/${id}`}>
        <img className={styles.image} src={img} alt="Экскурсия" />
        <div className={styles.cardText}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.modal}>
          <p className={pagesCSS.description}>{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default ExcursionCard;
