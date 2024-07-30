import pagesCSS from "../../Pages.module.css";
import styles from "./EventDetailDateSection.module.css";
import { useEventStore } from "../../../store/eventStore";
import { FC } from "react";

const EventDetailDateSection: FC = () => {
  const event = useEventStore((state) => state.event);

  if (event.date) {
    return (
      <section className={styles.dateSection}>
        <div>
          <h2 className={pagesCSS.sectionTitle}>Дата и время</h2>
          <div>
            <p className={pagesCSS.description}>{event.date}</p>
          </div>
        </div>
      </section>
    );
  }
};

export default EventDetailDateSection;
