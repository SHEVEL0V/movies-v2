/** @format */

import s from './style.module.css'

type Children = { children: React.ReactNode }

const Section: React.FC<Children> = ({ children }) => {
  return <div className={s.section}>{children}</div>
}

export default Section
