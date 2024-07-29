import pagesCSS from '../../Pages.module.css'
import EventList from "../../../components/EventList/EventList";
import { FC } from 'react';

const UpcomingEvents: FC = () => {
  return (
    <section>
      <h2 className={pagesCSS.sectionTitle}>Все события</h2>
      <EventList quantity={10} showDescription={true} />
    </section>
  )
}

export default UpcomingEvents