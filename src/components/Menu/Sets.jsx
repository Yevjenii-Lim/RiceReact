import React from 'react';
import { NavLink } from 'react-router-dom';
import SetsSvg from '../../assets/svgIcons/Sets';
import Item from './ItemMenu';
import s from "./menu.module.css";
import RollsSvg from '../../assets/svgIcons/Rolls';
import SushiSvg from '../../assets/svgIcons/Sushi';
import SoupSvg from '../../assets/svgIcons/Suop';


let Sets = (props) => {

  let link = null
  if(!props.match) {
      link = <NavLink className={s.more}  to="/sets">Ещё</NavLink>
  }
    let items = props.menu.sets.map((i) => {
        return (
          <Item
            title={i.title}
            photo={i.photo}
            desc={i.desc}
            key={i.id}
            price={i.price}
            addToCart={props.addToCartThunkCreator}
            id={i.id}
            amount={i.amount}
          ></Item>
        );
      });
    return <div className={s.productsRow}>
    <div className={s.rowTitle}>
      <p>Сеты
      <SetsSvg></SetsSvg>
      </p>
      {link}
      {/* <NavLink to="/sets">Ceты</NavLink> */}
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
}


export default Sets