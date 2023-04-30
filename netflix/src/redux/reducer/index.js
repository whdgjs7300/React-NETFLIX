import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import movieReducer from "./movieReducer";


export default combineReducers({
    movie : movieReducer,
    filter : filterReducer,
});