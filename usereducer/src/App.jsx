import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useReducer } from "react";
import Apptodo from "./components/Addtodo";
import Appname from "./components/Appname";
import Todo1 from "./components/Todo1";
import "./App.css";
import TodoItems from "./components/TodoItems";

import Welcomemessage from "./components/Welcomemessage";
import { TodoItemsocontext } from "./store/todoitemsstore";
const todoitemsreducer = (currenttodoItem,action)=>{
  //let newTodoItems=currenttodoItem;
  if(action.type == "NEW_ITEM"){
    const newTodoItems = [
      ...currenttodoItem,
      { name: action.payload.itemname, duedate: action.payload.itemduedate },
    ];
     return newTodoItems;
   }
   else if(action.type=="DELETE_ITEM"){
    const newTodoItems = currenttodoItem.filter(
      (itemname) => itemname.name !== action.payload.itemName
    );
    return newTodoItems;
   }
}
function App() {
  const itemnames = [];
  //const [todoitems, settodoitem] = useState(itemnames);
  const [todoitems,dispatchTodoItems]=useReducer(todoitemsreducer,[]);
  const handlenewitem = (itemname, itemduedate) => {
    const newItemAction={
      type:"NEW_ITEM",
      payload:{
        itemname,
        itemduedate,
      }
    };
    dispatchTodoItems(newItemAction);
    // settodoitem(newTodoItems);
  };
  const handledeleteitem = (itemName) => {
    const delItemAction={
      type:"DELETE_ITEM",
      payload:{
         
        itemName,
      }
    };
    dispatchTodoItems(delItemAction);
    
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
