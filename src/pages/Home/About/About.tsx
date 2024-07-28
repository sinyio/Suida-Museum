import styles from "./About.module.css";
import pagesCss from "../../Pages.module.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import collage from "../../../assets/Collage-about.png";

const About: FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.wrapper}>
        <div className={styles.aboutLeft}>
          <h2 className={`${pagesCss.sectionTitle} ${pagesCss.sectionTitleLeft} ${styles.title}`}>Усадьба Суйда</h2>
          <p className={pagesCss.description}>
            Музей-усадьба Суйда – это уникальный памятник истории и архитектуры,
            расположенный в живописной местности Ленинградской области. Здесь вы
            сможете узнать о жизни и быте русских дворян, окунуться в атмосферу
            прошлых веков и насладиться красотой окружающей природы.
          </p>
          <Link className={pagesCss.link} to="/about">
            Узнать больше
          </Link>
        </div>
        <div className={styles.aboutRight}>
          <img src={collage} alt="Коллаж" />
        </div>
      </div>
    </section>
  );
};

export default About;
