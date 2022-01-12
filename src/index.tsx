import * as React from 'react'
import ReactFullAutoFormComponent from './components/ReactFullAutoForm'

import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const ReactFullAutoForm = ReactFullAutoFormComponent
