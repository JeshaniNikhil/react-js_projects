import Todo1 from "./Todo1";
const TodoItems = ({ itemnames }) => {
  return (
    <div className="todo-container">
      {itemnames.map((itemname) => (
        <Todo1 itemname={itemname.name} date={itemname.duedate}></Todo1>
      ))}
    </div>
  );
};
export default TodoItems;
