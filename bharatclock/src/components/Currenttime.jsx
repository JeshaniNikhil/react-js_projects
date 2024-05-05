function Currenttime(){
  let time=new Date();
  return  <p>This is The  Currrent Time is:{ time.toLocaleDateString() }-{time.toLocaleTimeString()}</p>
}
export default Currenttime;