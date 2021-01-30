import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToCartThunkCreator } from "../../redux/cart-reducer";
// import { openSubMenu } from "../../redux/mobileMenu-reducer";
import { openPopUp } from "../../redux/popup-reducer";
import RiceNudles from "../Menu/RiceNudless";
// import Item from "../Menu/ItemMenu";
import s from './products.module.css'

let RiceSection = (props) => {
    // console.log(props)
    // console.log({...props})
  return (
    <div className={s.section}>
      <RiceNudles {...props}></RiceNudles>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    menu: state.menu
  };
};


let WithUrlDataContainerComponent = withRouter(RiceSection)



let RiceContainer = connect(mapStateToProps, { addToCartThunkCreator,openPopUp })(WithUrlDataContainerComponent);

export default RiceContainer;
