function accountReducer(state={amount:0}, action)
{
  switch(action.type)
  {
    case "amount/initialization/pending":
      return
    case "amount/initialization/fullflled":
      return { amount: action.payload}
    case "amount/initialization/rejected":
      return 
     case "amount/inc":
      return { amount: state.amount+1}
    case "amount/dec":
      return { amount: state.amount-1}
    case "amount/incByAmt":
      return {amount: state.amount+action.payload}
      default:
        return state;
  }
}
export default accountReducer;