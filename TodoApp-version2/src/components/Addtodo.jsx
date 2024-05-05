function Apptodo(){
  return <div class="row">
  <div class="col-6">
    <input type='text' placeholder='Enter Todo Here' className='form-control'></input>
  </div>
  <div class="col-4"><input type="date" className='form-control' /></div>
  <div class="col-2">
    <button type="button" class="btn btn-success">Add</button>
  </div>
</div>
}
export default Apptodo;