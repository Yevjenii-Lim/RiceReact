import { connect } from "react-redux"
import { openMenu } from "../../redux/header-reducer"
import Header from "./Header"


let mapStateToProps = (state) => {
    return {
        state: state.headerReducer
    }
}



let HeaderContainer = connect(mapStateToProps,{openMenu})(Header)


export default HeaderContainer