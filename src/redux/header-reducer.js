import logo from '../assets/images/logotip2.png'
import ShopingCart from '../assets/svgIcons/ShopingCart'


const OPEN_MENU = 'OPEN_MENU';
const HIDE_LOADER = "HIDE_LOADER";
const OFF_ANIMATION = 'OFF_ANIMATION'
const ON_ANIMATION = "ON_ANIMATION"

let initialState = {
    isMobileMenuOpen: false,
    srcLogo: logo,
    isShowLoader: true,
    svgList: [
        // {code: <Instagram></Instagram>, link:'https://rice.ks.ua/', hide: true},
        // {code: <PhoneCall></PhoneCall>, link: '+380 50 678 43 20', hide: true},
        {code: <ShopingCart></ShopingCart>, link: '/cart'}
    ],
    animation: false,
}


let headerReducer = (state = initialState, action) => {
    switch(action.type) {
    case OPEN_MENU: {

        return {
            ...state,
            isMobileMenuOpen: !state.isMobileMenuOpen
        }
    }
    case HIDE_LOADER: {

        return {
            ...state,
            isShowLoader: false
        }
    }
    case OFF_ANIMATION: {
        // console.log('asas')
        return {
            ...state,
            animation: true
        }
    }
    case ON_ANIMATION: {
        return {
            ...state, 
            animation: false
        }
    }
        
    default: return state
    
    }
    
}



export let openMenu = () => ({type: OPEN_MENU})
export let hideLoader = () => ({type: HIDE_LOADER})
export let offAnimation = () => ({type: OFF_ANIMATION})
export let onAnimation = () => ({type: ON_ANIMATION})

export default headerReducer