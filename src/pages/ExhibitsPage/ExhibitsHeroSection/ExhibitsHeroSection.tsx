import pagesCSS from '../../Pages.module.css'
import image from '../../../assets/backdrops/exhibits.png'
import { FC } from 'react'

const ExhibitsHeroSection: FC = () => {
  return (
    <section className={pagesCSS.heroSection}>
      <img className={pagesCSS.backgroundImage} src={image} alt="Экспонаты" />
      <h1 className={pagesCSS.mainTitle}>Экспонаты</h1>
    </section>
  )
}

export default ExhibitsHeroSection