const OPEN_POP = "OPEN_POP"
const CART_POP_UP = "CART_POP_UP"


let initialState = {
    isOpen: false,
    cartPopUp: true,
}


let popUpReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case OPEN_POP: {
            // console.log(state)
            return {
                ...state,
                isOpen: !state.isOpen
            }
        }
        case CART_POP_UP : {
            // console.log('ads')
            return {
                ...state,
                cartPopUp: action.bool
            }
        }
        default: return state
    }
}


export const openPopUp = () => ({type:OPEN_POP})
export const cartPopUpAC = (bool) => ({type: CART_POP_UP, bool})


export default popUpReducer