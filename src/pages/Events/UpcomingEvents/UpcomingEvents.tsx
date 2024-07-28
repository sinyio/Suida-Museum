import pagesCSS from '../../Pages.module.css'
import EventList from "../../../components/EventList/EventList";

const UpcomingEvents = () => {
  return (
    <section>
      <h2 className={`${pagesCSS.sectionTitle} ${pagesCSS.sectionTitleLeft}`}>Ближайшие мероприятия</h2>
      <EventList quantity={10} />
    </section>
  )
}

export default UpcomingEvents