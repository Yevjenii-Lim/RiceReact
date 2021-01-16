import React from 'react';
import { NavLink } from 'react-router-dom';
import Item from './ItemMenu';
import s from "./menu.module.css";



let Sets = (props) => {

  let link = null
  if(!props.match) {
      link = <NavLink to="/sets">more</NavLink>
  }
    let items = props.menu.sets.map((i) => {
        return (
          <Item
            title={i.title}
            photo={i.photo}
            desc={i.desc}
            key={i.id}
            price={i.price}
            addToCart={props.addToCart}
            id={i.id}
          ></Item>
        );
      });
    return    <div>
    <div className={s.rowTitle}>
      <p>Сеты</p>
      {link}
      {/* <NavLink to="/sets">Ceты</NavLink> */}
    </div>
    <div className={s.row}>{items}</div>
  </div>
}


export default Sets