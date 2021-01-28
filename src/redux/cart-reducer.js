
import { cartPopUpAC } from "./popup-reducer"

const ADD_TO_CART = "ADD_TO_CART"
const DELETE_FORM_AMOUNT = "DELETE_FORM_AMOUNT";
const ADD_AMOUNT = "ADD_AMOUNT";
const REMOVE_FROM_CART = "REMOVE_FROM_CART"


let initialState = {
    order: [
        // {title: "Калифорния в кунжуте с крабом", price: 92, id: 1, amount : 1}
    ]
}

let cartReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TO_CART: {
          let orderN = {...action.order}
           let index =  state.order.findIndex((i, index ) => {
                if(i.id === orderN.id) {
                 return true
                }else {
                    return false
                }
            })
           
            if(index !== -1) {
                orderN.amount = orderN.amount + state.order[index].amount
                state.order.splice(index, 1 ,orderN)
                return {
                    ...state,
                    order: [...state.order]
                }
            }else {
                return {
                    ...state,
                    order: [...state.order, action.order]
                }
            }
           
        }
        case DELETE_FORM_AMOUNT: {
        let index = state.order.findIndex(i => i.id === action.order)
        // console.log(action.order)
            if(state.order[index].amount > 1) {
                let newOrder = {...state.order[index]}
                // console.log(newOrder)
                newOrder.amount -= 1
                state.order.splice(index, 1, newOrder)
            }else {
                state.order.splice(index, 1)

            }
            return {
                ...state,
                order: [...state.order]
            }
        }
        case ADD_AMOUNT: {
            let index = state.order.findIndex(i => i.id === action.id)
            let order = {...state.order[index]}
            order.amount += 1
            state.order[index] = order
            return {
                ...state
            }
        }
        case REMOVE_FROM_CART: {
            let index = state.order.findIndex(i => i.id === action.id)
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
export let removeAmount = (order) => ({type: DELETE_FORM_AMOUNT, order})
export let addAmount = (id) => ({type: ADD_AMOUNT, id})
export let removeFromCart = (id) => ({type:REMOVE_FROM_CART, id})


export let addToCartThunkCreator = (order) => {
    return dispatch => {
        dispatch(addToCart(order));
        dispatch(cartPopUpAC(false))
    }
}

export default cartReducer