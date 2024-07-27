import styles from "./Events.module.css";
import pagesCss from "../../Pages.module.css";
import { FC, useEffect, useState } from "react";
import data from "../../../data/events/events.json";
import EventCard from "../../../components/EventCard/EventCard";

type Event = {
  id: number;
  title: string;
  description: string;
  img: string
};

const Events: FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(data.events);
  }, []);

  return (
    <section>
      <h2 className={pagesCss.sectionTitle}>Мероприятия</h2>
      <ul className={styles.eventList}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            description={event.description}
            img={event.img}
          />
        ))}
      </ul>
    </section>
  );
};

export default Events;
