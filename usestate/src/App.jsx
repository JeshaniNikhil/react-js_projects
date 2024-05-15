import { useState } from 'react'
import './App.css'
function App() {
  const [count,setcount] = useState(0);
  function updatecount(){
    setcount(count+1)
  }
  return (
    <>
    <div>{count}</div>
    <button onClick={updatecount}>click me</button>
    </>
  )
}
export default App
