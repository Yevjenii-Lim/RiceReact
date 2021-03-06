import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { openMenu } from "../../redux/header-reducer";
import { openAdress, openSubMenu } from "../../redux/mobileMenu-reducer";
import style from "./menuAndLoader.module.css";

let MobileMenu = (props, {isMobileMenuOpen},) => {
//   debugger

  let showMenu = props.isMobileMenuOpen ? style.openMenu : style.closeMenu;
  let mobileClasess = style.mobileMenu + " " + showMenu;
  let [subMenu, setSubMenu] = useState(true)
  let showSubMenu = subMenu
    ? style.subMenuOpen
    : style.subMenuClose;
  let menuListClasess = style.menuList + " " + showSubMenu;
  let rotateChevron = subMenu
    ? style.chevronRound
    : style.chevronUp;
  let chevronClass = style.chevron + " " + rotateChevron;


  let showAdress = props.isAdressOpen ? style.subMenuOpenAdress : style.subMenuClose;
  let adressListClasess = style.menuList + " " + showAdress;
  let rotateAdress = props.isAdressOpen ? style.chevronRound : style.chevronUp;
  let adressChevron = style.chevron + " " + rotateAdress;

  // let mobileNumbers = props.mobileNumbers.map(i => <a href='/cart' key={i.id}><p>{i.number}</p></a>)

  return (
    <div className={mobileClasess}>
      <div className={style.mobileTop}>
        <div className={style.logo}>
          <img src={props.srcLogo} alt="logo" />
        </div>
        <button className={style.btn} onClick={props.closeMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className={style.allMenu}>
        <div onClick={props.openMenu}> <NavLink className={style.itemTitle} to="/">Главная</NavLink> </div>
        <div onClick={props.openSubMenu} className={style.menuItem}>
          <div>
            <span className={style.itemTitle} onClick={()=> setSubMenu(!subMenu)}>Меню</span> 
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={chevronClass}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </p>
          </div>
          <ul className={menuListClasess}>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>

          </ul>
        </div>
        <div onClick={props.openMenu}><NavLink className={style.itemTitle} to="/cart">Корзина</NavLink></div>
        <div className={style.menuItem}>
          <span className={style.itemTitle}>Акции</span>  </div>
        <div onClick={props.openAdress} className={style.menuItem}>
          <div className={style.menuItem}>
            <span className={style.itemTitle}> Наши рестораны</span>
           
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={adressChevron}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </p>
          </div>
          <ul className={adressListClasess}>
            <li>Adress</li>
            <li>Adress</li>
          </ul>
        </div>
      </div>
      <div className={style.numbers}>
          <p>Оформить заказ:</p>
          {/* {mobileNumbers} */}
          {/* <p className={style.inst}><a href={props.inst.link}>{props.inst.code}Наш инстаграмм</a></p> */}
      </div>
    </div>
  );
};


export default MobileMenu;
