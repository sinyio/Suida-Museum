import styles from "./Exhibits.module.css";
import pagesCss from "../../Pages.module.css";
import { FC } from "react";

const Exhibits: FC = () => {
  return (
    <section>
      <div className={styles.exhibitsRight}>
        <h2 className={pagesCss.sectionTitle}>Экспонаты музея</h2>
      </div>
    </section>
  );
};

export default Exhibits;
