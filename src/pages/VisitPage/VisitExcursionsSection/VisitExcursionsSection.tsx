import ExcursionList from '../../../components/ExcursionList/ExcurionList'
import { FC } from 'react'
import pagesCSS from '../../Pages.module.css'

const VisitExcursionsSection: FC = () => {
  return (
    <section>
      <h2 className={pagesCSS.sectionTitle}>Виды экскурсий</h2>
      <ExcursionList />
    </section>
  )
}

export default VisitExcursionsSection