import React from "react";
import { NavLink } from "react-router-dom";
import SoupSvg from "../../assets/svgIcons/Suop";
import Item from "./ItemMenu";
import s from "./menu.module.css";

let Soup = (props) => {
  // debugger
  // console.log(props)
  let link = null;
  if (props.soups == null) return null;
  if (!props.match) {
    link = (
      <NavLink className={s.more} to="/soup">
        Ещё
      </NavLink>
    );
  }
  let items = props.soups.map((i) => {
    return (
      <Item
        title={i.title}
        photo={i.img}
        desc={i.desc}
        key={i.id}
        price={i.price}
        id={i.id}
        type={i.type}

        // popUp={props.popUp.isOpen}
      ></Item>
    );
  });
  return (
    <div className={s.productsRow} id="section1">
      <div className={s.rowTitle}>
        <p>
          Супы
          <SoupSvg></SoupSvg>
        </p>

        {link}
      </div>
      <div className={s.row}>{items}</div>
 
    </div>
  );
};

export default Soup;
