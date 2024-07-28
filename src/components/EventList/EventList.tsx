import { FC, useEffect, useState } from "react";
import styles from "./EventList.module.css";
import data from "../../data/events/events.json";
import EventCard from "../EventCard/EventCard";

type Event = {
  id: number;
  title: string;
  description: string;
  img: string;
};

interface IEventList {
  quantity: number;
}

const EventList: FC<IEventList> = ({ quantity }) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(data.events);
  }, []);

  return (
    <ul className={styles.eventList}>
      {events.slice(0, quantity).map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          description={event.description}
          img={event.img}
        />
      ))}
    </ul>
  );
};

export default EventList;
