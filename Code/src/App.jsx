import { useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Child from "./Child.jsx";
import "./App.css";

function App() {
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
