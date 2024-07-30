import pagesCSS from '../../Pages.module.css'
import image from '../../../assets/backdrops/visit.png'
import { FC } from 'react'

const VisitHeroSection: FC = () => {
  return (
    <section className={pagesCSS.heroSection}>
      <img className={pagesCSS.backgroundImage} src={image} alt="Экскурсии" />
      <h1 className={pagesCSS.mainTitle}>Экскурсии</h1>
    </section>
  )
}

export default VisitHeroSection