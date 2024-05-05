import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import Apptodo from './components/Addtodo';
import Appname from './components/Appname';
import Todo1 from './components/Todo1';
import Todo2 from './components/Todo2';
import "./App.css";
function App() {  
return (
    <>
  <center>
    <Appname></Appname>
    <div class="container text-center">
  <Apptodo></Apptodo>
  <br></br>
  <div className='todo-container'>
  <Todo1></Todo1>
  <br></br>
  <Todo2></Todo2>
  </div>
</div>
  </center>
    </>
  )
}

export default App
