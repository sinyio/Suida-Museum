import { FC } from "react";
import pagesCSS from "../Pages.module.css";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import HomeEventsSection from "./HomeEventsSection/HomeEventsSection";
import HomeAboutSection from "./HomeAboutSection/HomeAboutSection";
import HomeExhibitsSection from "./HomeExhibitsSection/HomeExhibitsSection";
import HomeVisitSection from "./HomeVisitSection/HomeVisitSection";

const HomePage: FC = () => {
  return (
    <main className={pagesCSS.container}>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeEventsSection />
      <HomeExhibitsSection />
      <HomeVisitSection />
    </main>
  );
};

export default HomePage;
