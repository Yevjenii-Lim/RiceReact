import React from 'react';
// import s from "./bottomNav.module.css"
import s from "../botomNav/botomNav.module.css"
import { NavLink } from "react-router-dom";
import RollsSvg from "../../assets/svgIcons/Rolls";
import SetsSvg from "../../assets/svgIcons/Sets";
import SushiSvg from "../../assets/svgIcons/Sushi";
import SoupSvg from "../../assets/svgIcons/Suop";

const BotomNav = () => {
    return (
        <div className={s.bottomNav}>
        <NavLink className={s.links} to="/rolls">
          <RollsSvg></RollsSvg>
          <p>Роллы</p>
        </NavLink>
        <NavLink className={s.links} to="/sets">
          <SetsSvg></SetsSvg>
          <p>Сеты</p>
        </NavLink>
        <NavLink className={s.links} to="/rice">
          <SushiSvg></SushiSvg>
          <p>Лапша/рис</p>
        </NavLink>
        <NavLink className={s.links} to="/soup">
          <SoupSvg></SoupSvg>
          <p>Супы</p>
        </NavLink>
      </div>
    );
};

export default BotomNav;