import React from 'react'
import styles from './Display.module.css';
export default function Display({displayvalue}) {
  return (
    <input type="text" className={styles.display} value={displayvalue} readOnly/>
  )
}
