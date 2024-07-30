import { FC } from "react";
import styles from "./ExcursionList.module.css"
import excursions from "../../assets/excursions/excursions.ts";
import ExcursionCard from "../ExcursionCard/ExcursionCard.tsx";

const ExcursionList: FC = () => {
  return (
    <ul className={styles.excursionList}>
      {excursions.map((excursion) => (
        <ExcursionCard
          key={excursion.id}
          id={excursion.id}
          title={excursion.title}
          description={excursion.description}
          img={excursion.img}
        />
      ))}
    </ul>
  );
};

export default ExcursionList;
