import React from 'react';
import { connect } from 'react-redux';
import { openPopUp } from '../../redux/popup-reducer';


let PopUp = (props) => {
    // console.log(props)
    if(!props.isOpen) return null
    else {
        return <div>
        {props.item.title}
    </div>
    }
    
}


let mapStateToProps = (state) => {
    return {
        isOpen: state.popUp.isOpen
    }
}


let PopUpContainer = connect(mapStateToProps,{openPopUp})(PopUp)

export default PopUpContainer