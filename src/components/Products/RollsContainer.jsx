import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToCart } from "../../redux/cart-reducer";
// import Item from "../Menu/ItemMenu";
import Rolls from "../Menu/Rolls";
import s from './products.module.css'

let RollsSection = (props) => {
    // console.log(props)
    // console.log({...props})
  return (
    <div className={s.section}>
      <Rolls {...props}></Rolls>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    menu: state.menu
  };
};


let WithUrlDataContainerComponent = withRouter(RollsSection)


let RollsContainer = connect(mapStateToProps, { addToCart })(WithUrlDataContainerComponent);

export default RollsContainer;
