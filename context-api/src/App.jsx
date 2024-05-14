import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import Apptodo from "./components/Addtodo";
import Appname from "./components/Appname";
import Todo1 from "./components/Todo1";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Welcomemessage from "./components/Welcomemessage";
import { TodoItemsocontext } from "./store/todoitemsstore";
function App() {
  const itemnames = [];
  const [todoitems, settodoitem] = useState(itemnames);
  const handlenewitem = (itemname, itemduedate) => {
    console.log(`New Item Added: ${itemname} Date: ${itemduedate}`);
    const newTodoItems = [
      ...todoitems,
      { name: itemname, duedate: itemduedate },
    ];
    settodoitem(newTodoItems);
  };
  const handledeleteitem = (itemName) => {
    const newTodoItems = todoitems.filter(
      (itemname) => itemname.name !== itemName
    );
    settodoitem(newTodoItems);
  };
  const defaulttodoitem = [{ name: 'buy ghee', duedate: 'today' }];
  return (
    <TodoItemsocontext.Provider value={todoitems}>
      <center>
        <Appname></Appname>
        <div class="container text-center">
          <Apptodo onnewitem={handlenewitem}></Apptodo>
          <Welcomemessage></Welcomemessage>
          <TodoItems
            onDeleteclick={handledeleteitem}
          ></TodoItems>
          <br></br>
        </div>
      </center>
      </TodoItemsocontext.Provider>
  );
}
export default App;
