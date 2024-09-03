// state is a obj, which contain 2 key value pair where pair is nothing but an object.
let state = { 
  account: { amount: 1 }, 
  bonus: { points: 2 } 
};

// in reducer we always create a new state and return it, so lets try to create a new immutable state and see what happenes.
// in new state we just want our points to increase by one and amount remains the same

let newState=
{
  account: state.account,
  bonus: {points: state.bonus.points+1}
}
//  in reducer we will not have these objects instead we wil have state so using that state we accessed these values. But this is still not right way to do it, why?

let newState2={ account: { amount: state.account.amount}, bonus: { points: state.bonus.points } }

console.log(newState, state);
// lets run the code, everything looks correct but its not, lets try to change something in state and again run the code
state.account.amount=100;
console.log(newState, state);
// atline we written account: state.account which cerated a refrence and thats why the amount in new state is 100 too, lets see how to overcome this

console.log(newState2, state);