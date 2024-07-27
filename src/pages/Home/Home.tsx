import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { FC } from "react";
import pagesCSS from "../Pages.module.css";
import Hero from "./Hero/Hero";
import Events from "./Events/Events";
import About from "./About/About";
import Exhibits from "./Exhibits/Exhibits";
import Visit from "./Visit/Visit";

const Home: FC = () => {
  const { text } = useTranslation("hero");

  return (
    <main className={pagesCSS.container}>
      <Hero />
      <About />
      <Events />
      <Exhibits />
      <Visit />
    </main>
  );
};

export default Home;
