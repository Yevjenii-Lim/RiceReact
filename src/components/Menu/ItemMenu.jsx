import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import PopUpContainer from '../PopUp/PopUp';
import s from './menu.module.css'


let Item = (props) => {
//  console.log(props.match.params.productId)
// debugger
//  let popUp = props.popUp ? <PopUpContainer></PopUpContainer> : null;
    return <div className={s.item}>
        <div className={s.image}>
            <img className={s.itemImg} src={props.photo} alt=""/>
            <p className={s.price}>{props.price} грн.</p>
        </div>
        <h5>{props.title}</h5>
        <div className={s.desc}>{props.desc}</div>
        
        {/* {popUp} */}
        <NavLink to={'/item' + "/" + props.id} className={s.linkMore} >Подробнее...</NavLink>
        {/* <button onClick={props.openPopUp}>open popup</button> */}
        <button className={s.addBtn} onClick={()=>props.addToCart(props)}>Добавить</button>
    </div>
}


let withRouterData = withRouter(Item)


export default withRouterData