import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";
import accountReducer from "./reducers/account.js";
import bonusReducer from "./reducers/bonus.js";

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger, thunk)
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App store={store} />
  </StrictMode>
);
