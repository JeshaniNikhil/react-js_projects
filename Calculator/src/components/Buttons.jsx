import React from 'react'
import styles from './Buttons.module.css';
export default function Buttons() {
  const buttonnames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return (
    <div className={styles.buttoncontainer}>
      {buttonnames.map(
        (button)=><button className={styles.button}>{button}</button>
      )}
     </div>
  )
}
