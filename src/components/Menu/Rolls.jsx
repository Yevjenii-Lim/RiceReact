import React from "react";
import { NavLink } from "react-router-dom";
import RollsSvg from "../../assets/svgIcons/Rolls";
import Item from "./ItemMenu";
import s from "./menu.module.css";
import Loadercss from "../MenuAndLoader/Loadercss";

let Rolls = (props) => {
  // debugger
  // return <loadercss></loadercss>
  if (props.rolls == null) return <Loadercss></Loadercss>;
  let link = null;
  if (!props.match) {
    link = (
      <NavLink className={s.more} to="/rolls">
        Ещё
      </NavLink>
    );
  }
  let items = props.rolls.map((i) => {
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
    <div className={s.productsRow} id="section1">
      <div className={s.rowTitle}>
        <p>
          Роллы
          <RollsSvg></RollsSvg>
        </p>

        {link}
      </div>
      <div className={s.row}>{items}</div>
    </div>
  );
};

export default Rolls;
