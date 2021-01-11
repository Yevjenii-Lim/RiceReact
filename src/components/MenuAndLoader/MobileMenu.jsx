import React from "react";
import { connect } from "react-redux";
import { openMenu } from "../../redux/header-reducer";
import { openAdress, openSubMenu } from "../../redux/mobileMenu-reducer";
import style from "./menuAndLoader.module.css";

let MobileMenu = (props) => {
    // debugger
  let showMenu = props.isMobileMenuOpen ? style.openMenu : style.closeMenu;
  let mobileClasess = style.mobileMenu + " " + showMenu;
  let showSubMenu = props.isMobileSubMenuOpen ? style.subMenuOpen : style.subMenuClose;
  let menuListClasess = style.menuList + " " + showSubMenu;
  let rotateChevron = props.isMobileSubMenuOpen ? style.chevronRound : style.chevronUp;
  let chevronClass = style.chevron + " " + rotateChevron;

  let liSubMenuItems = props.subMenuItems.map(i => <li key={i.id}>{i.name}</li>)

  let  showAdress = props.isAdressOpen ? style.subMenuOpen : style.subMenuClose
  let adressListClasess = style.menuList + ' ' + showAdress;
  let rotateAdress =  props.isAdressOpen ? style.chevronRound : style.chevronUp;
  let adressChevron = style.chevron + " " + rotateAdress;

  return (
    <div className={mobileClasess}>
      <div className={style.mobileTop}>
        <div className={style.logo}>
          <img src={props.srcLogo} alt="logo" />
        </div>
        <button onClick={props.openMenu}> close</button>
      </div>
      <div className={style.allMenu}>
        <div>Главная</div>
        <div onClick={props.openSubMenu} className={style.menuItem}>
          <div>
            Меню
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={chevronClass}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </p>
          </div>
          <ul className={menuListClasess}>
                {liSubMenuItems}
          </ul>
        </div>
        <div>Корзина</div>
        <div>Акции</div>
        <div onClick={props.openAdress} className={style.menuItem}>
           <div>Наши рестораны
           <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    isMobileMenuOpen: state.headerReducer.isMobileMenuOpen,
    srcLogo: state.headerReducer.srcLogo,
    isMobileSubMenuOpen: state.mobileMenu.isMobileSubMenuOpen,
    subMenuItems: state.mobileMenu.subMenuItems,
    isAdressOpen: state.mobileMenu.isAdressOpen
  };
};

let MobileMenuContainer = connect(mapStateToProps, { openMenu, openSubMenu, openAdress})(
  MobileMenu
);

export default MobileMenuContainer;
