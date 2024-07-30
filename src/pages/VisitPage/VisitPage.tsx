import { FC } from "react"
import pagesCSS from "../Pages.module.css"
import VisitHeroSection from "./VisitHeroSection/VisitHeroSection"
import VisitExcursionsSection from "./VisitExcursionsSection/VisitExcursionsSection"

const VisitPage: FC = () => {
  return (
    <main className={pagesCSS.container}>
      <VisitHeroSection />
      <VisitExcursionsSection />
    </main>
  )
}

export default VisitPage