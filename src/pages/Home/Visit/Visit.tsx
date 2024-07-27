import styles from './Visit.module.css'
import pagesCss from '../../Pages.module.css'
import { FC } from 'react'

const Visit: FC = () => {
  return (
    <section>
      <h2 className={pagesCss.sectionTitle}>Как попасть</h2>
      <div className={styles.wrapper}></div>
    </section>
  )
}

export default Visit