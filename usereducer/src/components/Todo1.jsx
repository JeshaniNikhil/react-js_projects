import { MdDelete } from "react-icons/md";
function Todo1({itemname,date,handleondelete}){
  // let itemname='Buy Milk';
  // let date='4/10/2023';
  return <div class="row">
  <div class="col-6">
   {itemname}
  </div>
  <div class="col-4">{date}</div>
  <div class="col-2">
  <button type="button" class="btn btn-danger" onClick={() => handleondelete(itemname)}><MdDelete /></button>
  </div>
</div>
}
export default Todo1;