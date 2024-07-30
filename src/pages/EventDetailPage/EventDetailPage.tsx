import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEventStore } from "../../store/eventStore";
import data from "../../data/events/events.json";
import pagesCSS from "../Pages.module.css";
import EventDetailHeroSection from "./EventDetailHeroSection/EventDetailHeroSection";
import EventDetailDescriptionSection from "./EventDetailDescriptionSection/EventDetailDescriptionSection";
import EventDetailDateSection from "./EventDetailDateSection/EventDetailDateSection";
import EventDetailMoreEventsSection from "./EventDetailMoreEventsSection/EventDetailMoreEventsSection";

export interface IEventDetail {
  id: string;
  title: string;
  full_description: string;
  date?: string;
  backdrop_image: string;
}

const EventDetailPage: FC = () => {
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
      <EventDetailHeroSection />
      <EventDetailDescriptionSection />
      <EventDetailDateSection />
      <EventDetailMoreEventsSection />
    </main>
  );
};

export default EventDetailPage;
