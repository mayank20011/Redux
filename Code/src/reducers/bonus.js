function bonusReducer(state={points:0}, action){
    switch(action.type)
    {
       case "bonus/inc":
        return {points: state.points+1}
      case "bonus/dec":
        return {points: state.points-1}
      case "bonus/incByAmt":
        return {points:state.points+action.payload}
      default:
        return state;
    }
}
export default bonusReducer;
