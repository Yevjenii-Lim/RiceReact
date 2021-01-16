
const OPEN_SUB_MENU = "OPEN_SUB_MENU"
const OPEN_ADRESS = 'OPEN_ADRESS'

let initialState = {
    isMobileSubMenuOpen: false,
    isAdressOpen: false,
    subMenuItems: [
        {name: 'Сеты', id:1 , link: '/sets'},
        {name: 'Ролы', id:2, link: '/rolls' },
        {name: 'Супы', id:3, link: '/sup'},
        {name: 'Лапша/Рис', id:4, link: '/rice'},
        {name: 'Салаты', id:5, link: '/salats'},
        {name: 'Маки', id:6, link: '/maki'}
    ],
    mobileNumbers: [
        {number:'+380 50 678 43 20',id: 1},
        {number: '+380 68 508 12 20', id: 2}
    ]
}

let mobileMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_SUB_MENU: {
            if(action.event.target.localName !== 'ul' && action.event.target.localName !== 'li') {
                return {
                ...state,
                isMobileSubMenuOpen: !state.isMobileSubMenuOpen
                }
            }else {
                return state
            }
          
        }
        case OPEN_ADRESS: {
            if(action.event.target.localName !== 'ul' && action.event.target.localName !== 'li') {
                return {
                    ...state,
                    isAdressOpen: !state.isAdressOpen
                }
            }else {
                return state
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export let openSubMenu = (event) => ({type:OPEN_SUB_MENU,event})
export let openAdress = (event) => ({type: OPEN_ADRESS, event})

export default mobileMenuReducer