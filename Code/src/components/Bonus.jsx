function Bonus({increasePoints, points}) {
   function handleClick()
   {
    increasePoints();
   }
  return (
    <div className="border">
      <h4 className="pink">Bonus Component</h4>
      <h3 className="yellow">Total Points: {points}</h3>
      <button className="btns" style={{margin:"auto"}} onClick={handleClick}>Increment +</button>
    </div>
  )
}

export default Bonus