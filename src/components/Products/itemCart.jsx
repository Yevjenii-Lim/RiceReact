import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addToCartThunkCreator } from '../../redux/cart-reducer'
import { getProduct } from '../../redux/menu-reducer'
import s from './products.module.css'


class ItemCart extends React.Component {

    componentDidMount() {
        this.props.getProduct(this.props.match.params.productId)
        // console.log(this.props)
    }
    render() {
        if(this.props.product !== undefined) {
            // console.log(this.props.product)
            return <div className={s.itemCart}>
                <div className={s.productPhoto}>
                    <img src={this.props.product.photo} alt=""/>
                </div>
                <h2>{this.props.product.title}</h2>
                <p className={s.price}>Цена: {this.props.product.price} грн.</p>
                <p className={s.desc}>Состав:</p>
                <p className={s.desc}>
                    {this.props.product.desc}
                </p>
                <button className={s.addBtn} onClick={() => this.props.addToCartThunkCreator(this.props.product)}>Добавить в корзину</button>
            </div>
        }else {
            return <div className={s.itemCart}>
                wait for load
            </div>
        }
  
    }
}
let mapStateToProps = (state) => {

    return {
        product: state.menu.product
    }
}


let mapDispatchToProps =  {
    getProduct,
    addToCartThunkCreator
}


let containerItem = connect(mapStateToProps,mapDispatchToProps)(ItemCart)

let withRouteData = withRouter(containerItem)

export default withRouteData