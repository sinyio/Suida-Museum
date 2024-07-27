import styles from './Events.module.css'
import pagesCss from '../../Pages.module.css'
import { FC } from 'react'

const Events: FC = () => {
  return (
    <section>
      <h2 className={pagesCss.sectionTitle}>Мероприятия</h2>
      <ul className={styles.eventList}></ul>
    </section>
  )
}

export default Events