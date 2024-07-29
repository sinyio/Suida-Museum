import pagesCSS from '../../Pages.module.css'
import image from '../../../assets/backdrops/about.svg'
import { FC } from 'react'

const Hero: FC = () => {
  return (
    <section className={pagesCSS.heroSection}>
      <img className={pagesCSS.backgroundImage} src={image} alt="Музей-усадьба Суйда" />
      <h1 className={pagesCSS.mainTitle}>Музей-усадьба Суйда</h1>
    </section>
  )
}

export default Hero