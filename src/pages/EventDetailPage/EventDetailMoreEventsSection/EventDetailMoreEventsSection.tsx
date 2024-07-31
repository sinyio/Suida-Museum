import { FC } from "react";
import EventList from "../../../components/EventList/EventList";
import pagesCSS from "../../Pages.module.css";

const EventDetailMoreEventsSection: FC = () => {
  return (
    <section>
      <h2 className={pagesCSS.sectionTitle}>Смотрите также</h2>
      <EventList quantity={4} showDescription={false} />
    </section>
  );
};

export default EventDetailMoreEventsSection;
