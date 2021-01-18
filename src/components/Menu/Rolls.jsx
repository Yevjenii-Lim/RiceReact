import React from "react";
import { NavLink } from "react-router-dom";
import Item from "./ItemMenu";
import s from "./menu.module.css";



let Rolls = (props) => {
    // debugger
    // console.log(props)
    let link = null
    if(!props.match) {
        link = <NavLink to="/rolls">more</NavLink>
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
    <div>
      <div className={s.rowTitle}>
        <p>Роллы</p>
       {link}      
      </div>
      <div className={s.row}>{items}</div>
    </div>
  );
};

export default Rolls;
