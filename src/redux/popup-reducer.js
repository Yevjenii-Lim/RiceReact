const OPEN_POP = "OPEN_POP"

let initialState = {
    isOpen: false
}


let popUpReducer = (state = initialState, action) => {

    switch (action.type) {
        case OPEN_POP: {
            // console.log(state)
            return {
                ...state,
                isOpen: !state.isOpen
            }
        }
        default: return state
    }
}


export const openPopUp = () => ({type:OPEN_POP})

export default popUpReducer