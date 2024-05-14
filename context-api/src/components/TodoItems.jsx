import { useContext } from "react";
import Todo1 from "./Todo1";
import { TodoItemsocontext } from "../store/todoitemsstore";
const TodoItems = ({ onDeleteclick }) => {
  const itemnames=useContext(TodoItemsocontext);
  console.log(itemnames);
  return (
    <div className="todo-container">
      {itemnames.map((item) => (
        <Todo1
          key={item.name} 
          itemname={item.name}
          date={item.duedate}
          handleondelete={onDeleteclick} 
        />
      ))}
    </div>
  );
};
export default TodoItems;
