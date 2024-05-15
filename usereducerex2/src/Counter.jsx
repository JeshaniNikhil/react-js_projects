import React, { useReducer } from 'react'
const initstat=0;
const reducer = (curstate,action) => {
  if(action=="Increment"){
    return curstate+1
  }
  else if(action=="Decrement"){
    return curstate-1
  }
  else{
    return curstate;
  }
}
export const Counter = () => {
  const [count,dispatch]=useReducer(reducer,initstat);
  return (
    <>
    <div>{count}</div>
 <button onClick={()=>dispatch("Increment")}>Increment</button> 
 <button onClick={()=>dispatch("Decrement")}>Decrement</button> 
    </>
  )
}