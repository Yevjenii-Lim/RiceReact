import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import s from './products.module.css'


let ItemCart = (props) => {

    let [item, setItem] = useState({})
 
    useEffect(() => {
        let id = props.match.params.productId

        let request = async () => {
        let data = await axios.get("https://rice-api-flask.herokuapp.com/item/" + id)
        setItem(data.data.item)
        }
        try {
            request()
        } catch (error) {
            console.log(error)
        }
    
    }, [props.match.params.productId])

    if (!item) {
        return null
    }

    return <div className={s.itemCart}>
    <div className={s.productPhoto}>
        <img src={item.img} alt=""/>
    </div>
    <h2>{item.title}</h2>
    <p className={s.price}>Цена: {item.price} грн.</p>
    <p className={s.desc}>Состав:</p>
    <p className={s.desc}>
        {item.desc}
    </p>
    <button className={s.addBtn} onClick={()=> props.addToCart(item)}>Добавить в корзину</button>
</div>
}



let withRouteData = withRouter(ItemCart)

export default withRouteData