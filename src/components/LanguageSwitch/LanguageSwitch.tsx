// import { FC } from 'react'
// import styles from './LanguageSwitch.module.css'
// import { useLanguageStore } from '../../hooks/useTranslation/model'

// const LanguageSwitch: FC = () => {
//   const { language, setLanguage } = useLanguageStore((state) => state)

//   const handleClick = () => {
//     if (language === 'en') {
//         setLanguage('ru')
//     } else {
//         setLanguage('en')
//     }
//   }

//   return (
//     <div role="button" onClick={handleClick} className={styles.switch}>{language}</div>
//   )
// }

// export default LanguageSwitch