
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToCart } from "../../redux/cart-reducer";
import Sets from "../Menu/Sets";
// import Item from "../Menu/ItemMenu";
// import Rolls from "../Menu/Rolls";
import s from './products.module.css'


let SetsSection = (props) => {
    // console.log(props)
    // console.log({...props})
  return (
    <div className={s.section}>
      <Sets {...props}></Sets>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    menu: state.menu
  };
};


let WithUrlDataContainerComponent = withRouter(SetsSection)


let SetsContainer = connect(mapStateToProps, { addToCart })(WithUrlDataContainerComponent);

export default SetsContainer;