import {incBonus} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
function Bonus({store}) {

  const dispatch=useDispatch();
  const points=useSelector((state)=>state.bonus.points);
   function handleClick()
   {
     dispatch(incBonus());
   }

  return (
    <div className="border">
      <h4 className="pink">Bonus Component</h4>
      <h3 className="yellow">Total Points: {points}</h3>
      <button className="btns" style={{margin:"auto"}} onClick={handleClick}>Increment +</button>
    </div>
  )
}

export default Bonus;