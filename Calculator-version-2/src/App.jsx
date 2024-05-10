import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Display from './components/Display';
import Buttons from './components/Buttons';
import { useState } from 'react';
function App() {
  let [calval,setcalval]=useState("");
  return (
    <>
    <center><h1>Calculator</h1></center>
    <div className={styles.calculator}>
     <Display  displayvalue={calval}></Display>
     <Buttons onbuttonclick={ (buttontext) =>{
      if (buttontext === 'C'){
          setcalval("");
      }
      else if(buttontext==='='){
          const result=eval(calval);
          setcalval(result);
      }
      else{
        const newDisplayValue=calval+buttontext;
        setcalval(newDisplayValue);
      }
    }
     }></Buttons>
    </div>
    </>
  )
}
export default App