import {incAmount, decAmount, incByAmount} from "../actions/index";
function Account({store}) {  

  let v=0;

  function increment(){
    store.dispatch(incAmount());
  }
  function decrement()
  {
    store.dispatch(decAmount());
  }
  function changeValue(e)
  {
    v= +e.target.value;
  }
  function incByAmt(e)
  {
    store.dispatch(incByAmount(v));
    e.target.previousElementSibling.value="";
    v=0;
  }
  
  return (
    <div className="border">
      <h4 className="pink">Account Component</h4>
      <h3 className="yellow">Amount: {store.getState().account.amount}</h3>
      <div className="fr">
        <button className="btns" onClick={increment}>Increment +</button>
        <button className="btns" onClick={decrement}>Decrement -</button>
        <input type="text" placeholder="Enter Amount ..." className="btns" onChange={changeValue}/>
        <button className="btns" onClick={incByAmt}>Increment By Ammount</button>
      </div>
    </div>
  )
}

export default Account