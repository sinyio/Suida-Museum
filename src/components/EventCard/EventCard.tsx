import { FC } from "react";
import styles from "./EventCard.module.css";

export interface IEventCard {
  title: string;
  description: string;
  img: string;
}

const EventCard: FC<IEventCard> = ({ title, description, img }) => {
  return (
    <li className={styles.eventCard}>
      <div className={styles.cardText}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description.slice(0, 60)}</p>
      </div>
      <img src={img} alt="Событие" />
    </li>
  );
};

export default EventCard;
