import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEventStore } from "../../store/eventStore";
import data from "../../data/events/events.json";
import pagesCSS from "../Pages.module.css";
import Hero from "./Hero/Hero";
import Description from "./Description/Description";
import Date from "./Date/Date";
import MoreEvents from "./MoreEvents/MoreEvents";

export interface IEventDetail {
  id: string;
  title: string;
  full_description: string;
  date?: string;
  backdrop_image: string;
}

const EventDetail: FC = () => {
  const setEvent = useEventStore((state) => state.setEvent);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const currentEvent = data.events.find((event) => event.id === id);
    if (currentEvent) {
      setEvent({
        id: currentEvent.id,
        title: currentEvent.title,
        full_description: currentEvent.full_description,
        date: currentEvent.date,
        backdrop_image: currentEvent.backdrop_image,
      });
    }
  }, [id, setEvent]);

  return (
    <main className={pagesCSS.container}>
      <Hero />
      <Description />
      <Date />
      <MoreEvents />
    </main>
  );
};

export default EventDetail;
