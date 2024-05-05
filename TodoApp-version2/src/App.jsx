import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import Apptodo from "./components/Addtodo";
import Appname from "./components/Appname";
import Todo1 from "./components/Todo1";
import "./App.css";
import TodoItems from "./components/TodoItems";
function App() {
  const itemnames = [
    {
      name: "Buy Milk",
      duedate: "4/10/2023",
    },
    {
      name: "Go to College",
      duedate: "4/10/2023",
    },
    {
      name: "Play Cricket",
      duedate: "4/10/2023",
    },
  ];
  return (
    <>
      <center>
        <Appname></Appname>
        <div class="container text-center">
          <Apptodo></Apptodo>
          <TodoItems itemnames={itemnames}></TodoItems>
          <br></br>
        </div>
      </center>
    </>
  );
}
export default App;
