import { FC } from "react";
import image from "../../../assets/backdrops/events.png";
import pagesCSS from "../../Pages.module.css";

const Hero: FC = () => {
  return (
    <section className={pagesCSS.heroSection}>
      <h1 className={pagesCSS.mainTitle}>События</h1>
      <img className={pagesCSS.backgroundImage} src={image} alt="События" />
    </section>
  );
};

export default Hero;
