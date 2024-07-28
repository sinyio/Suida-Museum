import { FC } from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/suida_logo.png";
import VKLogo from "../../assets/socials/VK.svg";
import TelegramLogo from "../../assets/socials/Telegram.svg";
import YoutubeLogo from "../../assets/socials/Youtube.svg";
import copyright from "../../assets/copyright.svg";
import { useTranslation } from "react-i18next";

export const Footer: FC = () => {
  const { t } = useTranslation("mainPage");

  return (
    <footer className={styles.footer}>
      <img
        className={styles.logo}
        src={logo}
        alt="Логотип"
        aria-hidden="true"
      />
      <div className={styles.wrapper}>
        <div>
          <h3 className={styles.title}>{t("footer.contactTitle")}</h3>
          <p className={styles.text}>{t("footer.contactName")}</p>
          <p className={styles.text}>
            {t("footer.contactEmail")}{" "}
            <a className={styles.link} href="mailto:suyda-museum@yandex.ru">
              suyda-museum@yandex.ru
            </a>
          </p>
          <p className={styles.text}>
            {t("footer.contactPhone")}
            <a className={styles.link} href="tel:+78137158970">
              +7 (813) 715-89-70
            </a>
          </p>
        </div>
        <div>
          <h3 className={styles.title}>{t("footer.socialTitle")}</h3>
          <ul className={styles.socialsList}>
            <li className={styles.socialsItem}>
              <a href="https://vk.com/suyda_museum">
                <img className={styles.socialsIcon} src={VKLogo} alt="VK" />
              </a>
            </li>
            <li className={styles.socialsItem}>
              <a href="https://t.me/museumhannibal">
                <img
                  className={styles.socialsIcon}
                  src={TelegramLogo}
                  alt="Telegram"
                />
              </a>
            </li>
            <li className={styles.socialsItem}>
              <a href="">
                <img
                  className={styles.socialsIcon}
                  src={YoutubeLogo}
                  alt="Youtube"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyrightWrapper}>
        <img
          className={styles.copyright}
          src={copyright}
          alt="copyright"
          aria-hidden="true"
        />
      </div>
    </footer>
  );
};
