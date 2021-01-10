import { connect } from "react-redux"
import { hideLoader, openMenu } from "../../redux/header-reducer"
import Header from "./Header"
import React from 'react'

class HeaderClass extends React.Component {

    componentDidMount() {
        setTimeout( () => this.hideLoader(), 650)
    }
    hideLoader() {
        this.props.hideLoader()
    }
    render() {
        return (
            <Header {...this.props}></Header>
        )
    }
    

}



let mapStateToProps = (state) => {
    return {
        isMobileMenuOpen: state.headerReducer.isMobileMenuOpen,
        srcLogo: state.headerReducer.srcLogo,
        
        svgList: state.headerReducer.svgList
    }
}

let HeaderContainer = connect(mapStateToProps,{openMenu, hideLoader})(HeaderClass)


export default HeaderContainer