import styles from "./VideoReview.module.css";
import pagesCSS from "../../Pages.module.css";

const VideoReview = () => {
  return (
    <section className={styles.videoReviewSection}>
      <div className={styles.wrapper}>
        <h2 className={`${pagesCSS.sectionTitle}  ${styles.title}`}>Видео обзор</h2>
        <div className={styles.videoReviewRight}>
          <iframe className={styles.videoReview}
            height="542"
            src="https://www.youtube.com/embed/veXl0ckdyzU?si=nOJfUElvuEml8wNf"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p className={pagesCSS.description}>
            «Су́йда» — музей-усадьба в посёлке Суйда Гатчинского района
            Ленинградской области, филиал ленинградского областного
            государственного учреждения культуры «Музейное агентство». Музей
            расположен во флигеле бывшего поместья Абрама Петровича Ганнибала —
            прадеда Александра Сергеевича Пушкина. До обустройства этой усадьбы
            главным имением Ганнибала была Карьякула на территории современной
            Эстонии.Абрам Ганнибал купил имение в Суйде в 1759 году.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoReview;
