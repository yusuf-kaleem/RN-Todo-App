import { combineReducers } from "redux";
import {itemReducer} from "./itemsReducer";
const reducer = combineReducers({items:itemReducer})
export default reducer