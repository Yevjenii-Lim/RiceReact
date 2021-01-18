import React from 'react';
import PopUpContainer from '../PopUp/PopUp';
import s from './menu.module.css'


let Item = (props) => {
//  console.log(props)
// debugger
//  let popUp = props.popUp ? <PopUpContainer></PopUpContainer> : null;
    return <div className={s.item}>
        <div className={s.image}>
            <img className={s.itemImg} src={props.photo} alt=""/>
            <p className={s.price}>{props.price} грн.</p>
        </div>
        <h5>{props.title}</h5>
        <span className={s.desc}>{props.desc}</span>
        <span >more...</span>
        {/* {popUp} */}
        <button onClick={props.openPopUp}>open popup</button>
        <button className={s.addBtn} onClick={()=>props.addToCart(props)}>Добавить</button>
     
    </div>
}


export default Item