import { combineReducers, createStore } from "redux";
import cartReducer from "./cart-reducer";
import headerReducer from "./header-reducer";
import menuReducer from "./menu-reducer";
import mobileMenuReducer from "./mobileMenu-reducer";
import swiperReducer from "./swiper-reducer";


let reducers = combineReducers({
    headerReducer: headerReducer,
    mobileMenu: mobileMenuReducer,
    swiper: swiperReducer,
    menu: menuReducer,
    cart: cartReducer
}
);


let store = createStore(reducers)

export default store