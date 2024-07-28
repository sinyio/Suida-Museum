import { FC } from "react";
import EventList from "../../../components/EventList/EventList";
import pagesCSS from "../../Pages.module.css";

const MoreEvents: FC = () => {
  return (
    <section>
      <h2 className={pagesCSS.sectionTitle}>Смротрите также</h2>
      <EventList quantity={4} showDescription={false} />
    </section>
  );
};

export default MoreEvents;
