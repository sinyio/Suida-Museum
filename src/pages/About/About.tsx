import Hero from "./Hero/Hero"
import History from "./History/History"
import pagesCSS from '../Pages.module.css'
import VideoReview from "./VideoReview/VideoReview"

const About = () => {
  return (
    <main className={pagesCSS.container}>
      <Hero />
      <History />
      <VideoReview />
    </main>
  )
}

export default About