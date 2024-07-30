import pagesCSS from "../../Pages.module.css";
import image from "../../../assets/backdrops/exhibits.png";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const ExhibitsHeroSection: FC = () => {
  const { t } = useTranslation("exhibitsPage");

  return (
    <section className={pagesCSS.heroSection}>
      <img className={pagesCSS.backgroundImage} src={image} alt="Экспонаты" />
      <h1 className={pagesCSS.mainTitle}>{t("hero.title")}</h1>
    </section>
  );
};

export default ExhibitsHeroSection;
