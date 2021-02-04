import React from "react";
import { connect } from "react-redux";
// import { sendOrder } from "../../DAL/api";
import {
  addAmount,
  addExtraImbir,
  addExtraSoy,
  addExtraVas,
  addRegularSticks,
  addStudySticks,
  changeAdres,
  changeName,
  changeNumber,
  openExtra,
  removeAmount,
  removeFromCart,
  sendOrederThunkCreator,
  setCart,
  // sendOrder,
} from "../../redux/cart-reducer";
import { openMenu } from "../../redux/header-reducer";
import s from "./cart.module.css";

class CartPage extends React.Component {
  componentDidMount() {
    let order = localStorage.getItem("cart");
    order = JSON.parse(order);
    // console.log(order)
    if (order !== null) {
      if (order.length !== 0) {
        this.props.setCart(order);
      }
    }
    // console.log(order)
  }
  componentDidUpdate() {
    let cartStr = JSON.stringify(this.props.cart);
    localStorage.setItem("cart", cartStr);
  }

  render() {
    let shopItems = this.props.cart.order.map((i, index) => {
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
              <button
                className={s.sBtn}
                onClick={() => this.props.removeAmount(i.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-minus"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <span>{i.amount}</span>
              <button
                className={s.sBtn}
                onClick={() => this.props.addAmount(i.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
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

          <button
            className={s.xBtn + " " + s.sBtn}
            onClick={() => this.props.removeFromCart(i.id)}
          >
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

    let openExtra = this.props.cart.isOpenExtra ? s.closeExtra : s.openExtra;
    let rotateChevron = this.props.cart.isOpenExtra
      ? s.chevronRound
      : s.chevronUp;
    let chevronClass = s.chevron + " " + rotateChevron;

    let sum = this.props.cart.order.reduce((a, i) => a + i.price * i.amount, 0);
    sum +=
      (+this.props.cart.extraVas +
        +this.props.cart.extraSoy +
        +this.props.cart.extraImbir) *
      15;

    return (
      <div className={s.cart}>
        <p>Ваша корзина:</p>
        {shopItems}

        <div className={s.sticks}>
          <h5>Детали заказа:</h5>
          <p>Палочки обычные: {this.props.cart.regularSticks} шт.</p>
          <input
            type="range"
            onChange={(e) => this.props.addRegularSticks(e.target.value)}
            min="0"
            max="10"
            value={this.props.cart.regularSticks}
          ></input>
          <p>Палочки учебные: {this.props.cart.studySticks} шт.</p>
          <input
            type="range"
            onChange={(e) => this.props.addStudySticks(e.target.value)}
            min="0"
            max="10"
            value={this.props.cart.studySticks}
          ></input>
          <p className={s.extraTitle} onClick={this.props.openExtra}>
            Дополнительно - 15грн порция
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

          <div className={s.extra + " " + openExtra}>
            <div>
              <p>Васаби: {this.props.cart.extraVas} порц.</p>
              <input
                type="range"
                onChange={(e) => this.props.addExtraVas(e.target.value)}
                min="0"
                max="10"
                value={this.props.cart.extraVas}
              ></input>
            </div>
            <div>
              <p>Соевый: {this.props.cart.extraSoy} порц.</p>
              <input
                type="range"
                onChange={(e) => this.props.addExtraSoy(e.target.value)}
                min="0"
                max="10"
                value={this.props.cart.extraSoy}
              ></input>
            </div>
            <div>
              <p>Имбирь: {this.props.cart.extraImbir} порц.</p>
              <input
                type="range"
                onChange={(e) => this.props.addExtraImbir(e.target.value)}
                min="0"
                max="10"
                value={this.props.cart.extraImbir}
              ></input>
            </div>
          </div>
          <div className={s.delivery}>
            <h5 className={s.extraTitle}>Данные для доставки:</h5>
            <input
              type="text"
              name=""
              id="name"
              onChange={(e) => this.props.changeName(e.target.value)}
              value={this.props.cart.name}
              placeholder="Ваше имя"
            />
            <input
              type="text"
              name=""
              id="number"
              onChange={(e) => this.props.changeNumber(e.target.value)}
              value={this.props.cart.number}
              placeholder="Ваш номер телефона"
            />
            <input
              type="text"
              name=""
              id="adres"
              onChange={(e) => this.props.changeAdres(e.target.value)}
              value={this.props.cart.adres}
              placeholder="Адрес"
            />
          </div>
        </div>
        <div className={s.total}>
          <div>
            <p>Итого:</p>
            <p className={s.sum}>{sum} грн</p>
          </div>
          <div>
            <button
              onClick={() =>
                this.props.sendOrederThunkCreator(this.props.cart, sum)
              }
            >
              Заказать
            </button>
          </div>
        </div>
      </div>
    );
  }
}

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
  addRegularSticks,
  addStudySticks,
  addExtraVas,
  addExtraSoy,
  addExtraImbir,
  changeName,
  changeNumber,
  changeAdres,
  sendOrederThunkCreator,
  openExtra,
  setCart,
})(CartPage);

export default ContainerCart;
