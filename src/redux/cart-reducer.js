import { act } from "react-dom/test-utils"
import { cartPopUpAC } from "./popup-reducer"

const ADD_TO_CART = "ADD_TO_CART"
const DELETE_FORM_CART = "DELETE_FORM_CART"
let initialState = {
    order: [
        {title: "Калифорния в кунжуте с крабом", price: 92, id: 1, amount : 1}
    ]
}

let cartReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TO_CART: {
          let orderN = {...action.order}
           let index =  state.order.findIndex((i, index ) => {
                if(i.id === orderN.id) {
                 return true
                }
            })
            if(!index) {
                orderN.amount = orderN.amount + state.order[index].amount
                state.order.splice(index, 1 ,orderN)
                return {
                    ...state,
                    order: [...state.order, orderN]
                }
            }else {
                return {
                    ...state,
                    order: [...state.order, action.order]
                }
            }
            console.log(state.order[index])
           
        }
        case DELETE_FORM_CART: {
        let index = state.order.findIndex(i => i.id === action.id)
            // console.log(action.order.id)
            state.order.splice(index, 1)
            return {
                ...state,
                order: [...state.order]
            }
        }
        default: return state
    }

}


export let addToCart = (order) => ({type: ADD_TO_CART, order})
export let removeFromCart = (order) => ({type: DELETE_FORM_CART, order})



export let addToCartThunkCreator = (order) => {
    return dispatch => {
        dispatch(addToCart(order));
        dispatch(cartPopUpAC(false))
    }
}

export default cartReducer