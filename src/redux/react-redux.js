import { combineReducers, createStore } from "redux";
import headerReducer from "./header-reducer";
import mobileMenuReducer from "./mobileMenu-reducer";
import swiperReducer from "./swiper-reducer";


let reducers = combineReducers({
    headerReducer: headerReducer,
    mobileMenu: mobileMenuReducer,
    swiper: swiperReducer
}
);


let store = createStore(reducers)

export default store