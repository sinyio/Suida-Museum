import { FC } from "react";
import { useEventStore } from "../../../store/eventStore";
import pagesCSS from "../../Pages.module.css";

const Hero: FC = () => {
  const event = useEventStore((state) => state.event);

  return (
    <section className={pagesCSS.heroSection}>
      <h1 className={pagesCSS.mainTitle}>{event.title}</h1>
      <img
        className={pagesCSS.backgroundImage}
        src={event.backdrop_image}
        alt="Мероприятие"
      />
    </section>
  );
};

export default Hero;
