import React, { useState } from "react";
import { connect } from "react-redux";
// import { sendOrder } from "../../DAL/api";
import { openMenu } from "../../redux/header-reducer";
import s from "./cart.module.css";



let sum = (a) => {
  // console.log(a)
  if (a.length === 0) return 0

  return a.map(i => i.price * i.amount).reduce((a,b) => a + b, 0)
}

let Cart = (props) => {

  let [regularSticks, setRegularSticks] = useState(0)
  let [studySticks, setStudySticks] = useState(0)
  let [extraVas, setExtraVas] = useState(0)
  let [extraSoy, setExtraSoy] = useState(0)
  let [extraImbir, setExtraImbir] = useState(0)
  let [name, setName] = useState("")
  let [number, setNumber] = useState("")
  let [addres, setAddres] = useState("")
  let [openExtra, setOpenExtra] = useState(false)


  console.log(props)

  // let [order, setOrder] = useState(props.order)
  // let openExtra = this.props.cart.isOpenExtra ? s.closeExtra : s.openExtra;

  let sendOrder = (oreder, sum) => {
    console.log(sum)
  }
  // console.log(props.order)
  // let orderSum = props.order.reduce((a,b) => sum(a) + sum(b), sum({price: 0, amount: 1}))
  // let amountArr = props.order.map(i => sum(i))
  let orderSum = sum(props.order)
  console.log(orderSum)
  return <div className={s.cart}>
  <p>Ваша корзина:</p>
  {props.order.map(i => {
    return <ShopItem
    key={i.id}
      title={i.title}
      id={i.id}
      price={i.price}
      photo={i.img}
      amount={i.amount}
      addAmount={props.addAmount}
      deleteFromOrder={props.deleteFromOrder}
    >

    </ShopItem>
  })}

  <div className={s.sticks}>
    <h5>Детали заказа:</h5>
    <p>Палочки обычные: {regularSticks} шт.</p>
    <input
      type="range"
      onChange={(e) => setRegularSticks(e.target.value)}
      min="0"
      max="10"
      value={regularSticks}
    ></input>
    <p>Палочки учебные: {studySticks} шт.</p>
    <input
      type="range"
      onChange={(e) => setStudySticks(e.target.value)}
      min="0"
      max="10"
      value={studySticks}
    ></input>
    <p className={s.extraTitle} onClick={props.openExtra}>
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
        className={null}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </p>

    <div className={s.extra + " " + openExtra}>
      <div>
        <p>Васаби: {extraVas} порц.</p>
        <input
          type="range"
          onChange={(e) => setExtraVas(e.target.value)}
          min="0"
          max="10"
          value={extraVas}
        ></input>
      </div>
      <div>
        <p>Соевый: {extraSoy} порц.</p>
        <input
          type="range"
          onChange={(e) => setExtraSoy(e.target.value)}
          min="0"
          max="10"
          value={extraSoy}
        ></input>
      </div>
      <div>
        <p>Имбирь: {extraImbir} порц.</p>
        <input
          type="range"
          onChange={(e) => setExtraImbir(e.target.value)}
          min="0"
          max="10"
          value={extraImbir}
        ></input>
      </div>
    </div>
    <div className={s.delivery}>
      <h5 className={s.extraTitle}>Данные для доставки:</h5>
      <input
        type="text"
        name=""
        id="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Ваше имя"
      />
      <input
        type="text"
        name=""
        id="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        placeholder="Ваш номер телефона"
      />
      <input
        type="text"
        name=""
        id="adres"
        onChange={(e) => setAddres(e.target.value)}
        value={addres}
        placeholder="Адрес"
      />
    </div>
  </div>
  <div className={s.total}>
    <div>
      <p>Итого:</p>
      <p className={s.sum}>{orderSum} грн</p>
    </div>
    <div>
      <button
        onClick={() =>
         sendOrder("this.props.cart", "sum")
        }
      >
        Заказать
      </button>
    </div>
  </div>
</div>
}

let ShopItem = (props) => {

 

  return <div className={s.order}>
  <div className={s.photo}>
    <img src={props.photo} alt="order" />
  </div>
  <div className={s.title}>
    {props.title}
    <p>{props.price} грн.</p>
    <div className={s.btns}>
      <button
        className={s.sBtn}
        onClick={() => props.addAmount(props.id, props.amount - 1)}
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
      <span>{props.amount}</span>
      <button
        className={s.sBtn}
        onClick={() => props.addAmount(props.id, props.amount + 1)}
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
    onClick={() => props.deleteFromOrder(props.id)}
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
}



export default Cart;
