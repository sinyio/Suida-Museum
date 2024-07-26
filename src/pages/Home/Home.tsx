import styles from './Home.module.css'
import video from '../../assets/Suida.mp4'
import { useTranslation } from '../../hooks/useTranslation/useTranslation'

const Home = () => {
  const { text } = useTranslation('hero')

  return (
    <main>
      <section>
        <div className={styles.heroWrapper}>
          <h1 className={styles.title}>{text?.header}</h1>
          <p className={styles.description}>{text?.description}</p>
        </div>
        <div className={styles.videoWrapper}>
          <video className={styles.video} src={video} muted autoPlay loop></video>
        </div>
      </section>
    </main>
  )
}

export default Home