
import { sendOrderApi } from "../DAL/api";
import { cartPopUpAC } from "./popup-reducer"

const ADD_TO_CART = "ADD_TO_CART"
const DELETE_FORM_AMOUNT = "DELETE_FORM_AMOUNT";
const ADD_AMOUNT = "ADD_AMOUNT";
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
const ADD_REGULAR_STICKS = "ADD_REGULAR_STICKS"
const ADD_STUDY_STICKS = "ADD_STUDY_STICKS"
const ADD_EXTRA_VAS = "ADD_EXTRA_VAS"
const ADD_EXTRA_SOY = "ADD_EXTRA_SOY"
const ADD_EXTRA_IMB = "ADD_EXTRA_IMB"
const CHANGE_NAME = "CHANGE_NAME"
const CHANGE_NUMBER = "CHANGE_NUMBER"
const CHANGE_ADRES = "CHANGE_ADRES"
const SEND_ORDER = "SEND_ORDER"
const OPEN_EXTRA = "OPEN_EXTRA"
const SET_CART = "SET_CART"

let initialState = {
    order: [
        // {title: "Калифорния в кунжуте с крабом", price: 92, id: 1, amount : 1}
    ],
    regularSticks: 2,
    studySticks: 0,
    extraVas: 0,
    extraSoy: 0,
    extraImbir: 0,
    name: '',
    number: '',
    adres: '',
    isOpenExtra: false,
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
        case ADD_REGULAR_STICKS: {
            // console.log(action.num)
            return {
                ...state,
                regularSticks: action.num
            }
        }
        case ADD_STUDY_STICKS: {
            // console.log(action.num)
            return {
                ...state,
                studySticks: action.num
            }
        }
        case ADD_EXTRA_VAS: {
            return {
                ...state,
                extraVas: action.num
            }
        }
        case ADD_EXTRA_SOY: {
            return {
                ...state,
                extraSoy: action.num
            }
        }
        case ADD_EXTRA_IMB: {
            return {
                ...state,
                extraImbir: action.num
            }
        }
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.name
            }
        }
        case CHANGE_NUMBER: {
            return {
                ...state,
                number: action.number
            }
        }
        case CHANGE_ADRES: {
            return {
                ...state,
                adres: action.adres
            }
        }
        case SEND_ORDER: {
            // console.log(state)
            // let str = JSON.stringify(state)
            // console.log(str)
            return {
                ...state
            }
        }
        case OPEN_EXTRA: {
            return {
                ...state,
                isOpenExtra: !state.isOpenExtra
            }
        }
        case SET_CART: {
            // console.log(action.cart)
            let newCart = action.cart;
            return {
                ...state,
               ...newCart
            }
        }
        case "storage": {
            localStorage.setItem('cart', JSON.stringify(state))
            // console.log(state)
        }
        default: return state
    }


}


export let addToCart = (order) => ({type: ADD_TO_CART, order})
export let removeAmount = (order) => ({type: DELETE_FORM_AMOUNT, order})
export let addAmount = (id) => ({type: ADD_AMOUNT, id})
export let removeFromCart = (id) => ({type:REMOVE_FROM_CART, id})
export let addRegularSticks = (num) => ({type: ADD_REGULAR_STICKS, num})
export let addStudySticks = (num) => ({type: ADD_STUDY_STICKS, num})
export let addExtraVas = (num) => ({type: ADD_EXTRA_VAS, num})
export let addExtraSoy = (num) => ({type: ADD_EXTRA_SOY, num})
export let addExtraImbir = (num) => ({type: ADD_EXTRA_IMB, num})
export let changeName = (name) => ({type: CHANGE_NAME, name})
export let changeNumber = (number) => ({type: CHANGE_NUMBER, number})
export let changeAdres = (adres) => ({type: CHANGE_ADRES, adres})
export let sendOrder = (order) => ({type: SEND_ORDER, order})
export let openExtra = () => ({type: OPEN_EXTRA})
export let setCart = (cart) => ({type:SET_CART, cart})
let addToStorage = () => ({type: 'storage'})

export let addToCartThunkCreator = (order) => {
    return dispatch => {
        dispatch(addToCart(order));
        dispatch(cartPopUpAC(false))
        dispatch(addToStorage())
    }
}


export let sendOrederThunkCreator = (order, sum) => {
    return dispatch => {
        sendOrderApi(order,sum);
    }
}

export default cartReducer