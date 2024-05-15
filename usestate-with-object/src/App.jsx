import { useState } from "react";
import "./App.css";
function App() {
  function update() {
    setvalues({ ...allvalues, firstname: "Anonymous1" });
  }
  const [allvalues, setvalues] = useState({
    firstname: "anonymous",
    lastname: "Anonymous",
  });
  return (
    <>
      <h1>
        Firstname is {allvalues.firstname} lastname is {allvalues.lastname}
      </h1>
      <button onClick={update}>Update</button>
    </>
  );
}
export default App;
