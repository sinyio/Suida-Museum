import { FC } from "react";
import styles from "./ExhibitsSection.module.css";
import pagesCSS from "../../Pages.module.css";
import collageWedding from "../../../assets/collages/Collage-wedding.png";
import collageHannibal from "../../../assets/collages/Collage-Hannibal.png";
import collageSuyda from "../../../assets/collages/Collage-Suyda.png";

const ExhibitsSection: FC = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.exhibitsLeft}>
          <h2 className={`${pagesCSS.sectionTitle} ${styles.title}`}>
            Венчание
          </h2>
          <p className={`${pagesCSS.description} ${styles.text}`}>
            В Суйдинском храме в 1796 году состоялось венчание родителей А. С.
            Пушкина — Надежды Осиповны и поручика Сергея Львовича Пушкина,
            потомственного дворянина. Запись из метрической книги,
            свидетельствующую об этом, мы также можем обнаружить внутри музея.
          </p>
        </div>
        <div className={styles.exhibitsRight}>
          <img src={collageWedding} alt="Коллаж" />
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.exhibitsLeft}>
          <img src={collageHannibal} alt="Коллаж" />
        </div>
        <div className={styles.exhibitsRight}>
          <h2 className={`${pagesCSS.sectionTitle} ${styles.title}`}>
            Абрам Ганнибал
          </h2>
          <p className={`${pagesCSS.description} ${styles.text}`}>
            В первом зале представлена предполагаемая копия портрета юного
            Ганнибала. Оригинальное название картины — "Портрет неизвестного", и
            имя автора также неизвестно. По мнению некоторых исследователей,
            портрет был создан в России по заказу Петра Великого, стремившегося
            увековечить образ своего фаворита.
          </p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.exhibitsLeft}>
          <h2 className={`${pagesCSS.sectionTitle} ${styles.title}`}>
            Усадьба суйда
          </h2>
          <p className={`${pagesCSS.description} ${styles.text}`}>
            Родовой герб, созданный самим Ганнибалом, и минея служебная с его
            собственноручной подписью. Минея была подарена А. П. Ганнибалом
            церкви Воскресения Христова в Суйде 21 июня 1775 года в честь дня
            рождения его внучки, Надежды Осиповны Ганнибал.
          </p>
        </div>
        <div className={styles.exhibitsRight}>
          <img src={collageSuyda} alt="Коллаж" />
        </div>
      </div>
    </section>
  );
};

export default ExhibitsSection;
