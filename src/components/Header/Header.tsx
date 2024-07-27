import { FC } from "react";
import styles from "./Header.module.css";
// import LanguageSwitch from "../LanguageSwitch/LanguageSwitch"
import logo from "../../assets/suida_logo.png";
import { useTranslation } from "react-i18next";

const Header: FC = () => {
  const { t } = useTranslation("navigation");

  return (
    <header className={styles.header}>
      <img src={logo} aria-hidden="true" className={styles.leftHeaderItem} />
      <nav>
        <ul className={styles.navList}>
          <li>{t("tickets")}</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <div className={styles.rightHeaderItem}>{/* <LanguageSwitch /> */}</div>
    </header>
  );
};

export default Header;
