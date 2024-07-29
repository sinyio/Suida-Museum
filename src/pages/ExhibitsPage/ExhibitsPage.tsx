import { FC } from "react"
import pagesCSS from '../Pages.module.css'
import ExhibitsHeroSection from "./ExhibitsHeroSection/ExhibitsHeroSection"
import ExhibitsSection from "./ExhibitsSection/ExhibitsSection"

const ExhibitsPage: FC = () => {
  return (
    <main className={pagesCSS.container}>
      <ExhibitsHeroSection />
      <ExhibitsSection />
    </main>
  )
}

export default ExhibitsPage