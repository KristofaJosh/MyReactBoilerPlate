import {combineReducers} from "redux";
import {countReducer} from "./reducer/count.reducer";




const allReducers = combineReducers({
    countReducer
});

export default allReducers



