function Child({ dispatch }) {
  
  function calldispatch(e) {
    dispatch({type:`${e.target.innerHTML}`});
  }

  return (
    <div className="buttondiv">
      <button onClick={calldispatch}>+</button>
      <button onClick={calldispatch}>-</button>
      <button onClick={calldispatch}>*</button>
      <button onClick={calldispatch}>/</button>
    </div>
  );
}

export default Child;
