import logo from '../assets/images/logotip2.png'
import Instagram from '../assets/svgIcons/instagram'
import PhoneCall from '../assets/svgIcons/PhoneCall'
import ShopingCart from '../assets/svgIcons/ShopingCart'


const OPEN_MENU = 'OPEN_MENU';
const HIDE_LOADER = "HIDE_LOADER";


let initialState = {
    isMobileMenuOpen: false,
    srcLogo: logo,
    isShowLoader: true,
    svgList: [
        {code: <Instagram></Instagram>},
        {code: <PhoneCall></PhoneCall>},
        {code: <ShopingCart></ShopingCart>}

    ]
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
        
    default: return state
    
    }
    
}



export let openMenu = () => ({type: OPEN_MENU})
export let hideLoader = () => ({type: HIDE_LOADER})

export default headerReducer