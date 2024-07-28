import styles from './Hero.module.css'
import pagesCSS from '../../Pages.module.css'
import image from '../../../assets/about.svg'

const Hero = () => {
  return (
    <section className={pagesCSS.heroSection}>
      <img className={styles.image} src={image} alt="Музей-усадьба Суйда" />
      <h1 className={styles.title}>Музей&minus;усадьба Суйда</h1>
    </section>
  )
}

export default Hero