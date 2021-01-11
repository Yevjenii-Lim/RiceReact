import { combineReducers, createStore } from "redux";
import headerReducer from "./header-reducer";
import mobileMenuReducer from "./mobileMenu-reducer";


let reducers = combineReducers({
    headerReducer: headerReducer,
    mobileMenu: mobileMenuReducer
}
);


let store = createStore(reducers)

export default store