import axios from "axios";
export function incAmount() {
  return { type: "amount/inc" };
}
export function decAmount() {
  return { type: "amount/dec" };
}
export function incByAmount(amount = 0) {
  return { type: "amount/incByAmt", payload: amount };
}
export function incBonus() {
  return { type: "bonus/inc" };
}

export function getUser(id) {
  return (dispatch, getState) => {
    axios
      .get(`http://localhost:3000/accounts/${id}`)
      .then((response) => {
        dispatch(amountInitializationFullfilled(response.data.amount));
      })
      .catch((err) => {
        console.log(err);
        dispatch(amountInitializationRejected(err))
      });
  };
}

export function amountInitializationPending() {
  return { type: "amount/initialization/pending"};
}
function amountInitializationFullfilled(value) {
  return { type: "amount/initialization/fullflled", payload: value };
}
export function amountInitializationRejected(err) {
  return { type: "amount/initialization/rejected", payload:err};
}
