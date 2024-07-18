import { FC, HTMLAttributes } from 'react'
import styles from './Link.module.css'

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {}

const Link: FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <a className={styles.link} {...rest}>{children}</a>
  )
}

export default Link