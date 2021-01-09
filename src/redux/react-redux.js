import { combineReducers, createStore } from "redux";
import headerReducer from "./header-reducer";


let reducers = combineReducers(
    {headerReducer: headerReducer}
);


let store = createStore(reducers)

export default store