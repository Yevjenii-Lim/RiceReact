import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import cartReducer from "./cart-reducer";
import headerReducer from "./header-reducer";
import itemReducer from "./item-reducer";
import menuReducer from "./menu-reducer";
import mobileMenuReducer from "./mobileMenu-reducer";
import popUpReducer from "./popup-reducer";
import swiperReducer from "./swiper-reducer";


let reducers = combineReducers({
    headerReducer: headerReducer,
    mobileMenu: mobileMenuReducer,
    swiper: swiperReducer,
    menu: menuReducer,
    cart: cartReducer,
    popUp: popUpReducer,
    item: itemReducer
    
}
);

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleWare)))

export default store