import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart-reducer';
import Rolls from './Rolls';
import Sets from './Sets';


let Menu = (props) => {
   
    // rolls={props.menu.rolls}
    return (
        <div>
            <Rolls {...props}></Rolls>
            <Sets {...props}></Sets>
        </div>
    )
}



let mapStateToProps = (state) => {
    return {
        menu: state.menu
    }
}


let MenuContainer = connect(mapStateToProps,{addToCart})(Menu)



export default MenuContainer