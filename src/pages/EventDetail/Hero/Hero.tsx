import { FC } from "react";
import { useEventStore } from "../../../store/eventStore";
import pagesCSS from "../../Pages.module.css";
import styles from "./Hero.module.css";

const Hero: FC = () => {
  const event = useEventStore((state) => state.event);

  return (
    <section className={`${pagesCSS.heroSection} ${styles.eventDetailHeroSection}`}>
      <h1 className={`${pagesCSS.mainTitle} ${styles.title}`}>{event.title}</h1>
      <div className={styles.wrapper}>
        <img
          className={`${pagesCSS.backgroundImage} ${styles.image}`}
          src={event.backdrop_image}
          alt="Мероприятие"
        />
      </div>
    </section>
  );
};

export default Hero;
