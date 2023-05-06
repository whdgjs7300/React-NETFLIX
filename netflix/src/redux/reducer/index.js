import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import pageReducer from "./pageReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
    movie : movieReducer,
    page : pageReducer,
    
});