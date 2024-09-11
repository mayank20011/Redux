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