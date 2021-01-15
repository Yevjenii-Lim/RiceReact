import React from 'react';
import s from './menu.module.css'


let Item = (props) => {
//  console.log(props)
    return <div className={s.item}>
        <div>
            <img className={s.itemImg} src={props.photo} alt=""/>
            <p>{props.price}</p>
        </div>
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
        <button onClick={()=>props.addToCart(props)}>Добавить</button>
    </div>
}


export default Item