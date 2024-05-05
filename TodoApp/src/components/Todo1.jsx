function Todo1(){
  let itemname='Buy Milk';
  let date='4/10/2023';
  return <div class="row">
  <div class="col-6">
   {itemname}
  </div>
  <div class="col-4">{date}</div>
  <div class="col-2">
    <button type="button" class="btn btn-danger">Delete</button>
  </div>
</div>

}
export default Todo1;