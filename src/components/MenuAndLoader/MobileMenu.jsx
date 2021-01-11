import React from "react";
import { connect } from "react-redux";
import { openMenu } from "../../redux/header-reducer";
import style from "./menuAndLoader.module.css";

let MobileMenu = (props) => {
  let showMenu = props.isMobileMenuOpen ? style.openMenu : style.closeMenu;
  let mobileClasess = style.mobileMenu + " " + showMenu;

  return (
    <div className={mobileClasess}>
      <div className={style.mobileTop}>
        <div className={style.logo}>
          <img src={props.srcLogo} alt="logo" />
        </div>
        <button onClick={props.openMenu}> close</button>
      </div>
      <p>HELLO</p>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    isMobileMenuOpen: state.headerReducer.isMobileMenuOpen,
    srcLogo: state.headerReducer.srcLogo,
  };
};

let MobileMenuContainer = connect(mapStateToProps, { openMenu })(MobileMenu);

export default MobileMenuContainer;
