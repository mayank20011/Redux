function Account({increment, decrement, changeValue, incByAmt ,amount}) {  
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

export default Account