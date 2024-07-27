import styles from './Exhibits.module.css'
import pagesCss from '../../Pages.module.css'
import { FC } from 'react'

const Exhibits: FC = () => {
  return (
    <section>
      <h2 className={pagesCss.sectionTitle}>Экспонаты музея</h2>
    </section>
  )
}

export default Exhibits