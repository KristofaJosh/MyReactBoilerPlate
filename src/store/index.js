import { createStore } from "redux";
import allReducers from "./reducers";

let isDev =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined;

const store = createStore(allReducers, isDev);

export default store;
