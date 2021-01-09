const OPEN_MENU = 'OPEN_MENU'

let initialState = {
    isMobileMenuOpen: false
}

let headerReducer = (state = initialState, action) => {
    switch(action.type) {
    case OPEN_MENU: {

        return {
            ...state,
            isMobileMenuOpen: !state.isMobileMenuOpen
        }
    }
        
    default: return state
    
    }
    
}



export let openMenu = () => ({type: OPEN_MENU})

export default headerReducer