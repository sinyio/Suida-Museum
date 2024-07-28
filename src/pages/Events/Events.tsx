import pagesCSS from '../Pages.module.css'
import Hero from './Hero/Hero'
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents"

const Events = () => {
  return (
    <main className={pagesCSS.container}>
      <Hero />
      <UpcomingEvents />
    </main>
  )
}

export default Events