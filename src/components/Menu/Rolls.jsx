import React from "react";
import Item from "./ItemMenu";
import s from "./menu.module.css";

let Rolls = (props) => {
  let items = props.menu.rolls.map((i) => {
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
  return (
    <div>
      <div className={s.rowTitle}>
        <p>rolls</p>
        <button>more</button>
      </div>
      <div className={s.row}>{items}</div>
    </div>
  );
};

export default Rolls;
