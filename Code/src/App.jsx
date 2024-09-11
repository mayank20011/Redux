import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";

function App() {

   const amount=useSelector((state)=>state.account.amount);
   const points=useSelector((state)=>state.bonus.points);
   
  return (
    <div>
      <h1 className="pink">APP</h1>
      <h3 className="yellow">Current Amount: {amount}</h3>
      <h3 className="yellow">Total Bonus: {points}</h3>
      <Account/>
      <Bonus/>
    </div>
  );

}
export default App;
