import styles from "./Events.module.css";
import pagesCss from "../../Pages.module.css";
import { FC } from "react";
import EventList from "../../../components/EventList/EventList";
import { Link } from "react-router-dom";

const Events: FC = () => {
  return (
    <section>
      <h2 className={pagesCss.sectionTitle}>
        Мероприятия
      </h2>
      <EventList quantity={4} />
      <div className={styles.linkWrapper}>
        <Link className={styles.link} to="/events">
          Посмотреть все
        </Link>
      </div>
    </section>
  );
};

export default Events;
