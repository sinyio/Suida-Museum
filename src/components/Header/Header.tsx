import { FC } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/suida_logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSwitchButton from "../LanguageSwitchButton/LanguageSwitchButton";

const Header: FC = () => {
  const { t } = useTranslation("navigation");

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} aria-hidden="true" className={styles.leftHeaderItem} />
      </Link>
      <nav>
        <ul className={styles.navList}>
          <Link className={styles.link} to="/events">
            {t("events")}
          </Link>
          <Link className={styles.link} to="/visit">
            {t("visit")}
          </Link>
          <Link className={styles.link} to="/online-tour">
            {t("online_tour")}
          </Link>
          <Link className={styles.link} to="/events">
            {t("about")}
          </Link>
          <Link className={styles.link} to="/contact">
            {t("contact")}
          </Link>
        </ul>
      </nav>
      <LanguageSwitchButton />
    </header>
  );
};

export default Header;
