import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/cart-reducer';
import s from './cart.module.css'

let CartPage = (props) => {
// console.log(props.cart.order)

let shopItems = props.cart.order.map((i,index) => {
    return (
        <div key={index}>
            <span>{i.title}</span>
            <span>{i.price}</span>
            <button onClick={()=> props.removeFromCart(i.id)}>Удалить</button>
        </div>
    )
})
let sum = props.cart.order.reduce((a,i) => a + i.price, 0)
    return <div className={s.cart}>
        {shopItems}
        <p>Ваш заказ на сумму: {sum} грн.</p>
    </div>
}


let mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

let ContainerCart = connect(mapStateToProps, {removeFromCart})(CartPage)

export default ContainerCart