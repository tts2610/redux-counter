import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  count: 1,
  color: "pink",
  divArr: {},
};

// function countReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + 1,
//         color: action.payload,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - 1 < 1 ? 1 : state.count - 1,
//         color: action.payload,
//       };
//     case "RESET":
//       return {
//         count: 1,
//         color: action.payload,
//       };
//     case "CHANGECOLOR":
//       return {
//         count: state.count,
//         color: action.payload,
//       };
//     case "CHANGEINDIVIDUAL":
//       return {
//         count: state.count,
//         color: action.payload,
//         divArr: (state.divArr[action.payload.id] = action.payload.color),
//       };
//     default:
//       return state;
//   }
// }

function reducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    state.count++;
  } else if (action.type === "DECREMENT") {
    state.count = state.count - 1 < 1 ? 1 : state.count - 1;
  } else if (action.type === "CHANGECOLOR") {
    state.color = action.payload.all;
  } else if (action.type === "CHANGEINDIVIDUAL") {
    state.divArr[action.payload.id] = action.payload.color;
  }
  console.log(typeoff state.divArr);
  state.divArr = [...state.divArr];
  return { ...state };
}

const store = createStore(
  reducer,
  // Hooks up Redux Devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
