import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  addAmount,
  removeAmount,
  removeFromCart,
} from "../../redux/cart-reducer";
import { openMenu } from "../../redux/header-reducer";
import s from "./cart.module.css";

let CartPage = (props) => {
  // console.log(props.cart.order)
  // debugger
  let shopItems = props.cart.order.map((i, index) => {
    // console.log(i)
    return (
      <div key={index} className={s.order}>
        <div className={s.photo}>
          <img src={i.photo} alt="order" />
        </div>
        <div className={s.title}>
          {i.title}
          <p>{i.price} грн.</p>
          <div>
            <button onClick={() => props.removeAmount(i.id)}>remove</button>
            <span>{i.amount}</span>
            <button onClick={() => props.addAmount(i.id)}>add</button>
          </div>
        </div>

        <button className={s.xBtn} onClick={() => props.removeFromCart(i.id)}>
          Удалить
        </button>
      </div>
    );
  });
  // props.openMenu()
  useEffect(() => {
    // props.openMenu()
    // console.log('acara')
  });
  let sum = props.cart.order.reduce((a, i) => a + i.price * i.amount, 0);
  return (
    <div className={s.cart}>
      <p>Ваша корзина:</p>
      {shopItems}
      <p>Ваш заказ на сумму: {sum} грн.</p>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    cart: state.cart,
    mobileMenu: state.headerReducer.isMobileMenuOpen,
  };
};

let ContainerCart = connect(mapStateToProps, {
  removeAmount,
  openMenu,
  addAmount,
  removeFromCart,
})(CartPage);

export default ContainerCart;
