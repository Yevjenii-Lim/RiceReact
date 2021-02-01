import React from 'react';
import { connect } from 'react-redux';
import { addToCartThunkCreator } from '../../redux/cart-reducer';
import { openPopUp } from '../../redux/popup-reducer';
// import PopUp from '../PopUp/PopUp';
import Rolls from './Rolls';
import Sets from './Sets';
import s from "./menu.module.css";
import { NavLink } from 'react-router-dom';
import Soup from './Soup';
import RiceNudles from './RiceNudless';
import SoupSvg from '../../assets/svgIcons/Suop';
import SetsSvg from '../../assets/svgIcons/Sets';
import RollsSvg from '../../assets/svgIcons/Rolls';
import SushiSvg from '../../assets/svgIcons/Sushi';
import { chengeSearch, searchThunkCreactor } from '../../redux/menu-reducer';






let Menu = (props) => {
//    console.log(props)
// debugger
    // rolls={props.menu.rolls}
    // props.menu.rolls.length = 2
    let rolls =  [...props.menu.rolls];
    let sets = [...props.menu.sets];
    let riceNoodles = [...props.menu.riceNoodles];
    let soups = [...props.menu.soups]
    sets.length = 2
    rolls.length = 2
    riceNoodles.length = 2
    soups.length = 2
    let copy = {
        ...props,
        menu: {...props.menu,
        rolls: rolls,
        sets: sets,
        riceNoodles: riceNoodles,
        soups: soups
        }
    }
    // console.log(copy)
    // console.log(props)
    return (
        <div className={s.wholeMenu}>
            {/* <input type="text" value={props.menu.search} onChange={(e) => props.chengeSearch(e.target.value)}/> */}
            {/* <button onClick={props.searchThunkCreactor}>Поиск</button> */}
            <Rolls {...copy}></Rolls>
            <Sets {...copy}></Sets>
            <RiceNudles {...copy}></RiceNudles>
            <Soup {...copy}></Soup>
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
                <NavLink className={s.links} to='/soup'>
                    <SoupSvg></SoupSvg>
                    <p>Супы</p>
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



let MenuContainer = connect(mapStateToProps,{addToCartThunkCreator,openPopUp, chengeSearch,searchThunkCreactor})(Menu)



export default MenuContainer