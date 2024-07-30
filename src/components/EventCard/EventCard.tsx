import { FC } from "react";
import styles from "./EventCard.module.css";
import { Link } from "react-router-dom";

interface IEventCard {
  id: string;
  title: string;
  description: string;
  img: string;
  showDescription: boolean;
}

const EventCard: FC<IEventCard> = ({
  id,
  title,
  description,
  img,
  showDescription,
}) => {
  return (
    <li
      className={
        showDescription
          ? `${styles.eventCard}`
          : `${styles.eventCard} ${styles.eventCardWithoutDescr}`
      }
    >
      <Link className={styles.link} to={`/events/${id}`}>
        <img className={styles.image} src={img} alt="Событие" />
        <div className={styles.cardText}>
          <h3 className={styles.title}>{title}</h3>
          {showDescription ? (
            <p className={styles.description}>
              {description.slice(0, 60) + " . . ."}
            </p>
          ) : null}
        </div>
      </Link>
    </li>
  );
};

export default EventCard;
