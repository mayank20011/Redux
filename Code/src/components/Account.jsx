import {incAmount, decAmount, incByAmount} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

function Account() { 
  const dispatch=useDispatch();
  const amount=useSelector((state)=>state.account.amount);
  let v=0;
  function increment(){
    dispatch(incAmount());
  }
  function decrement(){
    dispatch(decAmount());
  }
  function incByAmt(e){
    dispatch(incByAmount(v));
    e.target.previousElementSibling.value="";
    v=0;
  }
  
  function changeValue(e){
    v= +e.target.value;
  }
  return (
    <div className="border">
      <h4 className="pink">Account Component</h4>
      <h3 className="yellow">Amount: {amount}</h3>
      <div className="fr">
        <button className="btns" onClick={increment}>Increment +</button>
        <button className="btns" onClick={decrement}>Decrement -</button>
        <input type="text" placeholder="Enter Amount ..." className="btns" onChange={changeValue}/>
        <button className="btns" onClick={incByAmt}>Increment By Ammount</button>
      </div>
    </div>
  )
}
export default Account;