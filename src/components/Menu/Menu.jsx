import React from 'react';
import { connect } from 'react-redux';
import { addToCartThunkCreator } from '../../redux/cart-reducer';
import { openPopUp } from '../../redux/popup-reducer';
// import PopUp from '../PopUp/PopUp';
import Rolls from './Rolls';
import Sets from './Sets';
import s from "./menu.module.css";
import RollsSvg from '../../assets/svgIcons/Rolls';
import { NavLink } from 'react-router-dom';
import SetsSvg from '../../assets/svgIcons/Sets';
import SushiSvg from '../../assets/svgIcons/Sushi';
import RiceNudles from './RiceNudless';

let Menu = (props) => {
//    console.log(props)
// debugger
    // rolls={props.menu.rolls}
    // props.menu.rolls.length = 2
    let rolls =  [...props.menu.rolls];
    let sets = [...props.menu.sets];
    let riceNoodles = [...props.menu.riceNoodles]
    sets.length = 2
    rolls.length = 2
    riceNoodles.length = 2
    let copy = {
        ...props,
        menu: {...props.menu,
        rolls: rolls,
        sets: sets,
        riceNoodles: riceNoodles
        }
    }
    // console.log(copy)
    // console.log(props)
    return (
        <div className={s.wholeMenu}>
            
            <Rolls {...copy}></Rolls>
            <Sets {...copy}></Sets>
            <RiceNudles {...copy}></RiceNudles>
            <div className={s.bottomNav}>
                <NavLink className={s.links} to='/rolls'>
                    <RollsSvg></RollsSvg>
                    <p>Роллы</p>
                </NavLink>
                <NavLink className={s.links} to='/sets'>
                    <SetsSvg></SetsSvg>
                    <p>Сеты</p>
                </NavLink>
                <NavLink className={s.links} to='/rice'>
                    <SushiSvg></SushiSvg>
                    <p>Лапша/рис</p>
                </NavLink>
            </div>
        </div>
    )
}



let mapStateToProps = (state) => {
    return {
        menu: state.menu,
        // popUp: state.popUp,
    }
}



let MenuContainer = connect(mapStateToProps,{addToCartThunkCreator,openPopUp})(Menu)



export default MenuContainer