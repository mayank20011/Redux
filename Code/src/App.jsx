import { useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Child from "./Child.jsx";
import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import { thunk } from "redux-thunk";
import "./App.css";

function App() {

  const store = createStore(
    combineReducers({
      account: storeReducer,
      bonus: bonusReducer,
    }),
    applyMiddleware(logger, thunk)
  );

  function storeReducer(state = { amount: 1 }, action) {
    switch (action.type) {
      case "INITIALIZATION":
        return { amount: action.payload };
      case "ADD":
        return { amount: state.amount + action.payload };
      case "SUBTRACT":
        return { amount: state.amount - 1 };
      case "DIVIDE":
        return { amount: state.amount / 2 };
      case "DOUBLE":
        return { amount: state.amount * 2 };
      case "RESET":
        return { amount: 1 };
      default:
        return state;
    }
  }

  function bonusReducer(state = { points: 1 }, action) {
    switch (action.type) {
      case "BONUSINITIALIZATION":
        return { points: action.payload };
      case "BONUSADD":
        return { points: state.points + action.payload };
      case "BONUSSUBTRACT":
        return { points: state.points + action.payload };
      case "BONUSDOUBLE":
        return { points: state.points * 2 };
      default:
        return state;
    }
  }

  // Action Creator for count
  function INITIALIZATION(dispatch, getState) {
    axios
      .get("http://localhost:3000/accounts")
      .then((response) => {
        dispatch({ type: "INITIALIZATION", payload: response.data[0].amount });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function ADD(payload = 1) {
    return { type: "ADD", payload: payload };
  }
  function SUBTRACT() {
    return { type: "SUBTRACT" };
  }
  function DIVIDE() {
    return { type: "DIVIDE" };
  }
  function DOUBLE() {
    return { type: "DOUBLE" };
  }
  function RESET() {
    return { type: "RESET" };
  }

  //  Action creator for bonus
  function bonusInitialization(dispatch, getState) {
    axios
      .get("http://localhost:3000/bonus")
      .then((response) => {
        dispatch({ type: "BONUSINITIALIZATION", payload: response.data[1].points });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function bonusADD(value = 1) {
    return { type: "BONUSADD", payload: value };
  }
  function bonusSubtract(value = 1) {
    return { type: "BONUSSUBTRACT", payload: value };
  }
  function bonusDouble() {
    return { type: "BONUSDOUBLE" };
  }

  store.dispatch(INITIALIZATION);
  store.dispatch(bonusInitialization);
  // store.dispatch(ADD(5));
  // store.dispatch(SUBTRACT());
  // store.dispatch(DIVIDE());
  // store.dispatch(DOUBLE());
  // store.dispatch(RESET());
  const [count, dispatch] = useReducer(countReducer, 0);

  function countReducer(count, action) {
    switch (action.type) {
      case "+":
        return count + 1;
      case "-":
        return count - 1;
      case "*":
        return count * 2;
      case "/":
        return count / 2;
      case "0":
        return 0;
      default:
        return count;
    }
  }

  function resetCount() {
    dispatch({ type: "0" });
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={resetCount}>count is {count}</button>
      </div>
      <Child dispatch={dispatch} />
      <p className="read-the-docs">
        Click on "+" button to add 1, "-" to subtract 1, "*" to double the count
        and "/" to half the count and on count to reset the count.
      </p>
    </>
  );
}
export default App;
