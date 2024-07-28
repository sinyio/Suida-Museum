import pagesCSS from '../Pages.module.css'
import Hero from './Hero/Hero'
import Tours from './Tours/Tours'

const OnlineTour = () => {
  return (
    <main className={pagesCSS.container}>
      <Hero />
      <Tours />
    </main>
  )
}

export default OnlineTour