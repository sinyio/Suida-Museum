import { FC, useState } from "react";
import i18n from "i18next";
import styles from "./Header.module.css";
import logo from "../../assets/suida_logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const [language, setLanguage] = useState("ru");

  const { t } = useTranslation("navigation");

  const changeLanguage = () => {
    if (language === "ru") {
      i18n.changeLanguage("en");
      setLanguage("en");
    } else {
      i18n.changeLanguage("ru");
      setLanguage("ru");
    }
  };

  return (
    <header className={styles.header}>
      <Link to='/'><img src={logo} aria-hidden="true" className={styles.leftHeaderItem} /></Link>
      <nav>
        <ul className={styles.navList}>
          <Link className={styles.link} to='/events'>{t("events")}</Link>
          <Link className={styles.link} to='/visit'>{t("visit")}</Link>
          <Link className={styles.link} to='/online-tour'>{t("online_tour")}</Link>
          <Link className={styles.link} to='/events'>{t("about")}</Link>
          <Link className={styles.link} to='/contact'>{t("contact")}</Link>
        </ul>
      </nav>
      <button className={styles.switchLanguageBtn} onClick={changeLanguage}>
        {language === "ru" ? "RU" : "EN"}
      </button>
    </header>
  );
};

export default Header;
