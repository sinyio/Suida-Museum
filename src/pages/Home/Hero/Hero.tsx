import { FC } from "react";
import styles from "./Hero.module.css";
import pagesCss from "../../Pages.module.css";
import video from "../../../assets/Suida.mp4";

const Hero: FC = () => {
  return (
    <section className={pagesCss.heroSection}>
      <div className={styles.heroWrapper}>
        <h1 className={styles.title}>Музей&minus;усадьба Суйда</h1>
        <p className={styles.description}>
          Добро пожаловать в музей-усадьбу Суйда – погрузитесь в атмосферу
          дворянской жизни и откройте для себя историческое наследие России!
        </p>
      </div>
      <div className={styles.videoWrapper}>
        <video className={styles.video} src={video} muted autoPlay loop></video>
      </div>
    </section>
  );
};

export default Hero;
