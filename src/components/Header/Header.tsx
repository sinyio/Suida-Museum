import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/suida_logo.png";

import LanguageSwitchButton from "../LanguageSwitchButton/LanguageSwitchButton";

const Header: FC = () => {
  const { t } = useTranslation("navigation");

  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          className={styles.logo}
          src={logo}
          alt="Логотип"
          aria-hidden="true"
        />
      </Link>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.link} to="/events">
              {t("events")}
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/visit">
              {t("visit")}
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/online-tour">
              {t("online_tour")}
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/about">
              {t("about")}
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/contact">
              {t("contact")}
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.switchBtnWrapper}>
        <div className={styles.switchBtn}>
          <LanguageSwitchButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
