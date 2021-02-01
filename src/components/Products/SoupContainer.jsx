import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToCartThunkCreator } from "../../redux/cart-reducer";
// import { openSubMenu } from "../../redux/mobileMenu-reducer";
import { openPopUp } from "../../redux/popup-reducer";

import Soup from "../Menu/Soup";
// import Item from "../Menu/ItemMenu";
import s from './products.module.css'


let SoupSection = (props) => {
    // console.log(props)
    // console.log({...props})
  return (
    <div className={s.section}>
      <Soup {...props}></Soup>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    menu: state.menu
  };
};


let WithUrlDataContainerComponent = withRouter(SoupSection)



let SoupContainer = connect(mapStateToProps, { addToCartThunkCreator,openPopUp })(WithUrlDataContainerComponent);

export default SoupContainer;
