import React from 'react';
import Item from './ItemMenu';
import s from "./menu.module.css";



let Sets = (props) => {
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
      <p>sets</p>
      <button>more</button>
    </div>
    <div className={s.row}>{items}</div>
  </div>
}


export default Sets