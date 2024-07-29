import image from "../../../assets/backdrops/online_tour.svg";
import pagesCSS from "../../Pages.module.css";

const Hero = () => {
  return (
    <section className={pagesCSS.heroSection}>
      <h1 className={pagesCSS.mainTitle}>Вирутальное путешествие</h1>
      <img className={pagesCSS.backgroundImage} src={image} alt="Мероприятия" />
    </section>
  );
};

export default Hero;
