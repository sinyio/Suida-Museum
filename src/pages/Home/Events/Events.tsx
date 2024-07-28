import styles from "./Events.module.css";
import pagesCss from "../../Pages.module.css";
import { FC } from "react";
import EventList from "../../../components/EventList/EventList";

const Events: FC = () => {
  return (
    <section className={styles.eventSection}>
      <h2 className={`${pagesCss.sectionTitle} ${pagesCss.sectionTitleLeft}`}>
        Мероприятия
      </h2>
      <EventList quantity={4} />
    </section>
  );
};

export default Events;
