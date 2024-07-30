import pagesCSS from "../Pages.module.css";
import OnlineTourHeroSection from "./OnlineTourHeroSection/OnlineTourHeroSection";
import OnlineTourToursSection from "./OnlineTourToursSection/OnlineTourToursSection";

const OnlineTour = () => {
  return (
    <main className={pagesCSS.container}>
      <OnlineTourHeroSection />
      <OnlineTourToursSection />
    </main>
  );
};

export default OnlineTour;
