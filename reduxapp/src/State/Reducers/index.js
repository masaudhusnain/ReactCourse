import { combineReducers } from "redux";
import amountplayer from "./amountplayer";

const reducers = combineReducers({
    amount:amountplayer
})

export default reducers