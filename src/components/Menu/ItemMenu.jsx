import React from 'react';
import PopUpContainer from '../PopUp/PopUp';
import s from './menu.module.css'


let Item = (props) => {
//  console.log(props)
    return <div className={s.item}>
        <div>
            <img className={s.itemImg} src={props.photo} alt=""/>
            <p className={s.price}>{props.price} грн.</p>
        </div>
        <h5>{props.title}</h5>
        <p className={s.desc}>{props.desc}</p>
        <span onClick={props.openPopUp}>more...</span>
        <button className={s.addBtn} onClick={()=>props.addToCart(props)}>Добавить</button>
        <PopUpContainer item={props}>
            
        </PopUpContainer>
    </div>
}


export default Item