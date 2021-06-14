import React from "react";
import s from "./pop.module.css";



let CartPopUp = ({show}) => {
 console.log(show)
  let classes = s.cartPop + " " + (show ? s.hide : null);
  return <div className={ classes}>
  Добавленно в корзину!
</div>;
}

// class CartPop extends React.Component {
//   componentDidMount() {
//     // console.log(this.props);
//     setTimeout(() => {
//       this.props.cartPopUpAC(true);
//     }, 1500);
//   }

//   componentDidUpdate() {
//     if (this.cartItems < this.props.shopCart.order.reduce((a,i) => a + i.amount,0)) {
//       setTimeout(() => {
//         this.props.cartPopUpAC(true);
//       }, 1500);
//     }
//     this.cartItems = this.props.shopCart.order.reduce((a,i) => a + i.amount,0);
//   }
// //   cartItems;

//   render() {
//     let classes =
//       s.cartPop + " " + (this.props.cartPop.cartPopUp ? s.hide : null);

//     return <div className={classes}>
//         Добавленно в корзину!
//     </div>;
//   }
// }




export default CartPopUp;
