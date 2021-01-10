import { connect } from 'react-redux';
import React from 'react';
import style from './menuAndLoader.module.css'

let Loader = (props) => {

    let showLoader = props.isShowLoader ? 'null' : style.hideLoader;
    let loaderClasses = style.loader + " " + showLoader;


    return (
        <div className={loaderClasses}>Loader</div>
    )
}


let mapStateToProps = (state) => {
    return {
        isShowLoader: state.headerReducer.isShowLoader,
    }
}

let LoaderContainer = connect(mapStateToProps)(Loader)


export default LoaderContainer