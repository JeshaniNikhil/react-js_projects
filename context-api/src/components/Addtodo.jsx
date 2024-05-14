import { useRef, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function Apptodo({ onnewitem }) {
  // const [todoname, settodoname] = useState("");
  // const [tododate, settododate] = useState("");
  //const [noOfClicks, setNoOfClicks] = useState(0);
  const Todonameelement = useRef(0);
  const Tododuedateelement = useRef(0);
  // const handlenamechange = (event) => {
  //   settodoname(event.target.value);
  //   setNoOfClicks((prevCount) => prevCount + 1);
  // };

  // const handledatechange = (event) => {
  //   settododate(event.target.value);
  //   console.log(`Number of updates: ${noOfClicks}`);
  // };

  const handleaddbuttonclick = (event) => {
    event.preventDefault();
    const todoname =Todonameelement.current.value;
    const tododate =Tododuedateelement.current.value;
    Todonameelement.current.value="";
    Tododuedateelement.current.value="";
    console.log(`${todoname} : ${tododate}`);
    onnewitem(todoname, tododate);
    // settodoname("");
    // settododate("");
  };

  return (
    <form className="row" onSubmit={handleaddbuttonclick}>
      <div className="col-6">
        <input
          type="text"
          ref={Todonameelement}
          placeholder="Enter Todo Here"
          className="form-control"
          //onChange={handlenamechange}
    //      value={todoname}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          ref={Tododuedateelement}
          className="form-control"
          //onChange={handledatechange}
      //    value={tododate}
        />
      </div>
      <div className="col-2">
        <button
          type="submit"
          className="btn btn-success"
          // onClick={handleaddbuttonclick}
        >
          <IoIosAddCircleOutline />
        </button>
      </div>
    </form>
  );
}

export default Apptodo;
