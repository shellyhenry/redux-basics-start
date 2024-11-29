//import { createStore } from "redux";

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   return state;
// };

//const counterReducer = () => {};

//const store = createStore(counterReducer);

const counterReducer = () => {};
import { createStore } from "redux";
const mystore = createStore(counterReducer);

export default mystore;
