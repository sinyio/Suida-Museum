import { FC } from 'react'
import pagesCSS from '../Pages.module.css'
import Hero from './Hero/Hero'
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents"

const EventsPage: FC = () => {
  return (
    <main className={pagesCSS.container}>
      <Hero />
      <UpcomingEvents />
    </main>
  )
}

export default EventsPage