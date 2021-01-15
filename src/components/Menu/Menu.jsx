import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart-reducer';
import Rolls from './Rolls';
import Sets from './Sets';


let Menu = (props) => {
//    console.log(props)
// debugger
    // rolls={props.menu.rolls}
    // props.menu.rolls.length = 2
    let rolls =  [...props.menu.rolls];
    let sets = [...props.menu.sets];
    sets.length = 2
    rolls.length = 2
    let copy = {
        ...props,
        menu: {...props.menu,
        rolls: rolls,
        sets: sets
        }
    }
    // console.log(copy)
    // console.log(props)
    return (
        <div>
            <Rolls {...copy}></Rolls>
            <Sets {...copy}></Sets>
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