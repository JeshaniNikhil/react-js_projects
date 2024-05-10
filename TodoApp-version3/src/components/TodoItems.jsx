import Todo1 from "./Todo1";
const TodoItems = ({ itemnames, onDeleteclick }) => {
  return (
    <div className="todo-container">
      {itemnames.map((item) => (
        <Todo1
          key={item.name} // Added a unique key prop
          itemname={item.name}
          date={item.duedate}
          handleondelete={onDeleteclick} // Corrected prop name
        />
      ))}
    </div>
  );
};
export default TodoItems;
