import {incBonus} from "../actions/index";
function Bonus({store}) {
   function handleClick()
   {
     store.dispatch(incBonus());
   }

  return (
    <div className="border">
      <h4 className="pink">Bonus Component</h4>
      <h3 className="yellow">Total Points: {store.getState().bonus.points}</h3>
      <button className="btns" style={{margin:"auto"}} onClick={handleClick}>Increment +</button>
    </div>
  )
}

export default Bonus