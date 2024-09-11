import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
function App({store}) {

  return (
    <div>
      <h1 className="pink">APP</h1>
      <h3 className="yellow">Current Amount: {store.getState().account.amount}</h3>
      <h3 className="yellow">Total Bonus: {store.getState().bonus.points}</h3>
      <Account store={store}/>
      <Bonus store={store}/>
    </div>
  );
  
}
export default App;
