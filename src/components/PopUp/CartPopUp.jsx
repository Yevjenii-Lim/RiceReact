import React from "react";
import { connect } from "react-redux";
import { cartPopUpAC } from "../../redux/popup-reducer";
import s from "./pop.module.css";

class CartPop extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    setTimeout(() => {
      this.props.cartPopUpAC(true);
    }, 1500);
  }

  componentDidUpdate() {
    if (this.cartItems < this.props.shopCart.order.reduce((a,i) => a + i.amount,0)) {
      setTimeout(() => {
        this.props.cartPopUpAC(true);
      }, 1500);
    }
    this.cartItems = this.props.shopCart.order.reduce((a,i) => a + i.amount,0);
  }
//   cartItems;

  render() {
    let classes =
      s.cartPop + " " + (this.props.cartPop.cartPopUp ? s.hide : null);

    return <div className={classes}>
        Добавленно в корзину!
    </div>;
  }
}

let mapStateToProps = (state) => {
  return {
    cartPop: state.popUp,
    shopCart: state.cart,
  };
};

let CartPopContainer = connect(mapStateToProps, { cartPopUpAC })(CartPop);
export default CartPopContainer;
