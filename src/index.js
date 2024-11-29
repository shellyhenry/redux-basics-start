import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//import { mystore } from "./store/index";

import "./index.css";
import App from "./App";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
    };
  }

  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
//const counterReducer = () => {};
import { createStore } from "redux";
const mystore = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Hi");
root.render(
  <Provider store={mystore}>
    <App />
  </Provider>
);

// root.render(<App />);
