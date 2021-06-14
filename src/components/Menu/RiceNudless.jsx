import React from "react";
import { NavLink } from "react-router-dom";
import SushiSvg from "../../assets/svgIcons/Sushi";
import Item from "./ItemMenu";
import s from "./menu.module.css";
import Loadercss from "../MenuAndLoader/Loadercss";

let RiceNudles = (props) => {
  // debugger
  // console.log(props);
  let link = null;
  if (props.riceNoodles == null) return <Loadercss></Loadercss>;

  if (!props.match) {
    link = (
      <NavLink className={s.more} to="/rice">
        Ещё
      </NavLink>
    );
  }
  let items = props.riceNoodles.map((i) => {
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
          Лапша/Рис
          <SushiSvg></SushiSvg>
        </p>

        {link}
      </div>
      <div className={s.row}>{items}</div>
    </div>
  );
};

export default RiceNudles;
