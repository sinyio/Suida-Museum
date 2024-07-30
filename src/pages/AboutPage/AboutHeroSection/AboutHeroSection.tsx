import pagesCSS from "../../Pages.module.css";
import image from "../../../assets/backdrops/about.png";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const AboutHeroSection: FC = () => {
  const { t } = useTranslation("aboutPage");

  return (
    <section className={pagesCSS.heroSection}>
      <img
        className={pagesCSS.backgroundImage}
        src={image}
        alt="Музей-усадьба Суйда"
      />
      <h1 className={pagesCSS.mainTitle}>{t("hero.title")}</h1>
    </section>
  );
};

export default AboutHeroSection;
