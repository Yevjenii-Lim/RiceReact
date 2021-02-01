import React from "react";
import { NavLink } from "react-router-dom";
import RollsSvg from "../../assets/svgIcons/Rolls";
import Item from "./ItemMenu";
import s from "./menu.module.css";

import SetsSvg from '../../assets/svgIcons/Sets';
import SushiSvg from '../../assets/svgIcons/Sushi';
import SoupSvg from '../../assets/svgIcons/Suop';


let Rolls = (props) => {
    // debugger
    // console.log(props)
    let link = null
    if(!props.match) {
        link = <NavLink className={s.more} to="/rolls">Ещё</NavLink>
    }
  let items = props.menu.rolls.map((i) => {
    return (
      <Item
        title={i.title}
        photo={i.photo}
        desc={i.desc}
        key={i.id}
        price={i.price}
        addToCart={props.addToCartThunkCreator}
        openPopUp={props.openPopUp}
        id={i.id}
        amount={i.amount}
        // popUp={props.popUp.isOpen}
      ></Item>
    );
  });
  return (
    <div className={s.productsRow} id="section1">
      <div className={s.rowTitle}>
        <p>Роллы
          <RollsSvg></RollsSvg>
        </p>
    
       {link}      
      </div>
      <div className={s.row}>{items}</div>
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
  );
};

export default Rolls;
