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
          <div className={s.btns}>
            <button className={s.sBtn} onClick={() => props.removeAmount(i.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="yellow"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-minus"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <span>{i.amount}</span>
            <button className={s.sBtn} onClick={() => props.addAmount(i.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ADFF2F"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>

        <button className={s.xBtn + " " + s.sBtn} onClick={() => props.removeFromCart(i.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
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
