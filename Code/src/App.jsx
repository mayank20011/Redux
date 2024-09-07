import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useState } from "react";
function App() {
  // Account state and its functions 
  const [amount,setAmount]=useState(0);
  let v=0;
  function increment()
  {
    let a=amount;
      setAmount(a+1);
  }
  function decrement()
  {
    let a=amount;
    setAmount(a-1);
  }
  function changeValue(e)
  {
    v= +e.target.value;
  }
  function incByAmt(e)
  {
     let a=amount;
     setAmount(a+v);
     v=0;
     e.target.previousElementSibling.value="";
  }
  // points state and its  function
  const[points,setPoints]=useState(0);
  function increasePoints()
  {
    let a=points;
    setPoints(a+1);
  }
  return (
    <div>
      <h1 className="pink">APP</h1>
      <h3 className="yellow">Current Amount {amount}</h3>
      <h3 className="yellow">Total Bonus: {points}</h3>
      <Account increment={increment} decrement={decrement} changeValue={changeValue} incByAmt={incByAmt} amount={amount}/>
      <Bonus increasePoints={increasePoints} points={points}/>
    </div>
  );
}
export default App;
