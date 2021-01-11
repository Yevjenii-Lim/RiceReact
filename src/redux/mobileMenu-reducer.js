
const OPEN_SUB_MENU = "OPEN_SUB_MENU"
const OPEN_ADRESS = 'OPEN_ADRESS'

let initialState = {
    isMobileSubMenuOpen: false,
    isAdressOpen: false,
    subMenuItems: [
        {name: 'Суши', id:1},
        {name: 'Ролы', id:2},
        {name: 'Супы', id:3},
        {name: 'Лапша/Рис', id:4},
        {name: 'Салаты', id:5},
        {name: 'Маки', id:6}
    ]
}

let mobileMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_SUB_MENU: {
            return {
                ...state,
                isMobileSubMenuOpen: !state.isMobileSubMenuOpen
            }
        }
        case OPEN_ADRESS: {
            // console.log(state)
            return {
                ...state,
                isAdressOpen: !state.isAdressOpen
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}


export let openSubMenu = () => ({type:OPEN_SUB_MENU})
export let openAdress = () => ({type: OPEN_ADRESS})

export default mobileMenuReducer