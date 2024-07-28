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
  id: number;
  title: string;
  description: string;
  backdrop_image: string;
}

const EventDetail: FC = () => {
  const setEvent = useEventStore((state) => state.setEvent);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const currentEvent = data.events.find((event) => event.id === Number(id));
    if (currentEvent) {
      const eventDetail: IEventDetail = {
        id: currentEvent.id,
        title: currentEvent.title,
        description: currentEvent.description,
        backdrop_image: currentEvent.backdrop_image,
      };
      setEvent(eventDetail);
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
