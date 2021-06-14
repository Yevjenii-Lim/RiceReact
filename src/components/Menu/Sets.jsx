import React from "react";
import { NavLink } from "react-router-dom";
import SetsSvg from "../../assets/svgIcons/Sets";
import Item from "./ItemMenu";
import s from "./menu.module.css";

let Sets = (props) => {
  if (props.sets == null) return null;
  let link = null;
  if (!props.match) {
    link = (
      <NavLink className={s.more} to="/sets">
        Ещё
      </NavLink>
    );
  }
  let items = props.sets.map((i) => {
    return (
      <Item
        title={i.title}
        photo={i.img}
        desc={i.desc}
        key={i.id}
        price={i.price}
        id={i.id}
        type={i.type}
      ></Item>
    );
  });
  return (
    <div className={s.productsRow}>
      <div className={s.rowTitle}>
        <p>
          Сеты
          <SetsSvg />
        </p>
        {link}
        {/* <NavLink to="/sets">Ceты</NavLink> */}
      </div>
      <div className={s.row}>{items}</div>

    </div>
  );
};

export default Sets;
