import i18n from "i18next";
import { FC, useState } from "react";
import styles from "./LanguageSwitchButton.module.css";

const LanguageSwitchButton: FC = () => {
  const [language, setLanguage] = useState("ru");

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
    <button className={styles.languageSwitchBtn} onClick={changeLanguage}>
      {language === "ru" ? "RU" : "EN"}
    </button>
  );
};

export default LanguageSwitchButton;
