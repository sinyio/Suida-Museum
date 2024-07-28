import styles from "./Events.module.css";
import pagesCss from "../../Pages.module.css";
import { FC } from "react";
import EventList from "../../../components/EventList/EventList";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Events: FC = () => {
  const { t } = useTranslation("mainPage")

  return (
    <section>
      <h2 className={pagesCss.sectionTitle}>
        {t("events.title")}
      </h2>
      <EventList quantity={4} />
      <div className={styles.linkWrapper}>
        <Link className={styles.link} to="/events">
        {t("events.link")}
        </Link>
      </div>
    </section>
  );
};

export default Events;
