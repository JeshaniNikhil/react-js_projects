import React, { useContext } from 'react'
import styles from './Welcomemessage.module.css';
import { TodoItemsocontext } from "../store/todoitemsstore";
export default function Welcomemessage() {
  const todoitems=useContext(TodoItemsocontext);
  return (
     todoitems.length===0 &&  <p className={styles['wtext']}>Enjoy Your Day</p> 
  )
}
