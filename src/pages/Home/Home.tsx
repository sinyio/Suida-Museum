import styles from './Home.module.css'
import video from '../../assets/Suida.mp4'

const Home = () => {
  return (
    <main>
      <section>
        <div className={styles.heroWrapper}>
          <h1 className={styles.title}>Музей-Усадьба Суйда</h1>
          <p className={styles.description}>Кстати,  представители современных социальных резервов лишь добавляют фракционных разногласий и призваны к ответу.</p>
        </div>
        <video className={styles.video} src={video} muted autoPlay loop></video>
      </section>
    </main>
  )
}

export default Home