import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addToCart } from '../../redux/cart-reducer'
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
                <p>Цена: {this.props.product.price} грн.</p>
                <p>Состав:</p>
                <p>
                    {this.props.product.desc}
                </p>
                <button onClick={() => this.props.addToCart(this.props.product)}>Добавить в корзину</button>
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
    addToCart
}


let containerItem = connect(mapStateToProps,mapDispatchToProps)(ItemCart)

let withRouteData = withRouter(containerItem)

export default withRouteData