import AboutHeroSection from "./AboutHeroSection/AboutHeroSection"
import AboutHistorySection from "./AboutHistorySection/AboutHistorySection"
import pagesCSS from '../Pages.module.css'
import AboutVideoReviewSection from "./AboutVideoReviewSection/AboutVideoReviewSection"

const About = () => {
  return (
    <main className={pagesCSS.container}>
      <AboutHeroSection />
      <AboutHistorySection />
      <AboutVideoReviewSection />
    </main>
  )
}

export default About