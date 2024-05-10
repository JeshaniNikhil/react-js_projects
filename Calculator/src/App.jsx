import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Display from './components/Display';
import Buttons from './components/Buttons';
import { useState } from 'react';
function App() {
  
  return (
    <>
    <center><h1>Calculator</h1></center>
    <div className={styles.calculator}>
     <Display></Display>
     <Buttons></Buttons>
    </div>
    </>
  )
}

export default App
