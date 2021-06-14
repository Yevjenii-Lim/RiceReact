import React from "react";
import Rolls from "./Rolls";
import Sets from "./Sets";
import s from "./menu.module.css";
import Soup from "./Soup";
import RiceNudles from "./RiceNudless";


let Menu = (props) => {

 
  let products = (type) => {
      if (props.menu.length === 0) return null
    
    return props.menu.filter(i => i.type === type)
  }


  return (
    <div className={s.wholeMenu}>
      <Rolls rolls={products("roll")}></Rolls>
      <Sets sets={products("set")}></Sets>
      <RiceNudles riceNoodles={products("nudels")}></RiceNudles>
      <Soup soups={products("soup")}></Soup>
    </div>
  );
};




export default Menu;
