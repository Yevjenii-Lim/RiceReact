import { connect } from 'react-redux';
import React from 'react';
import style from './menuAndLoader.module.css'
import logo from '../../assets/images/loader-logo.png'

let Loader = (props) => {

    let showLoader = props.isShowLoader ? 'null' : style.hideLoader;
    let loaderClasses = style.loader + " " + showLoader;


    return (
        <div className={loaderClasses}>
            <img src={logo} alt="logo"/>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        isShowLoader: state.headerReducer.isShowLoader,
    }
}

let LoaderContainer = connect(mapStateToProps)(Loader)


export default LoaderContainer
// /assets/images