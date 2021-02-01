import React from "react";
import { NavLink } from "react-router-dom";
import SoupSvg from "../../assets/svgIcons/Suop";
import Item from "./ItemMenu";
import s from "./menu.module.css";
import SetsSvg from '../../assets/svgIcons/Sets';
import RollsSvg from '../../assets/svgIcons/Rolls';
import SushiSvg from '../../assets/svgIcons/Sushi';


let Soup = (props) => {
    // debugger
    // console.log(props)
    let link = null
    if(!props.match) {
        link = <NavLink className={s.more} to="/soup">Ещё</NavLink>
    }
  let items = props.menu.soups.map((i) => {
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
        <p>Супы
          <SoupSvg></SoupSvg>
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

export default Soup;
