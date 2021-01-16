import { connect } from "react-redux"
import { hideLoader, offAnimation, onAnimation, openMenu } from "../../redux/header-reducer"
import Header from "./Header"
import React from 'react'

class HeaderClass extends React.Component {

    componentDidMount() {
       
        setTimeout( () => this.props.hideLoader(), 650)
    }
    componentDidUpdate () {
        // setTimeout(() => this.props.offAnimation(), 100)
    }
    render() {
        return (
            <Header {...this.props}></Header>
        )
    }
    

}



let mapStateToProps = (state) => {
    return {
        srcLogo: state.headerReducer.srcLogo,
        svgList: state.headerReducer.svgList,
        animation: state.headerReducer.animation,
        cart: state.cart
    }
}


let HeaderContainer = connect(mapStateToProps,{openMenu, hideLoader,offAnimation, onAnimation})(HeaderClass)


export default HeaderContainer