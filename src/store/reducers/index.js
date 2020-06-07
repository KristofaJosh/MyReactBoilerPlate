import { combineReducers } from "redux";

import { authenticationReducer } from "./reducer/auth.reducer";
import { countReducer } from "./reducer/count.reducer";

// import reducers here
const allReducers = combineReducers({
  countReducer,
  authenticationReducer,
});

export default allReducers;
