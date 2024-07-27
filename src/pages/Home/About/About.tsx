import styles from "./About.module.css";
import pagesCss from "../../Pages.module.css";
import { FC } from "react";
import { Link } from "react-router-dom";

const About: FC = () => {
  return (
    <section>
      <div className={styles.aboutLeft}>
        <h2 className={pagesCss.sectionTitle}>Усадьба Суйда</h2>
        <p>
          Как принято считать, независимые государства подвергнуты целой серии
          независимых исследований. В целом, конечно, высококачественный
          прототип будущего проекта в значительной степени обусловливает
          важность системы массового участия.
        </p>
        <Link to="/about">Узнать больше</Link>
      </div>
    </section>
  );
};

export default About;
