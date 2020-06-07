import {combineReducers} from "redux";
import {countReducer} from "./reducer/count.reducer";
import {authenticationReducer} from "./reducer/auth.reducer";

// import reducers here
const allReducers = combineReducers({
    countReducer,
    authenticationReducer,
});

export default allReducers



