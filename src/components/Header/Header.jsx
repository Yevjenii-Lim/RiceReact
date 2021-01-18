import React from "react";
import { NavLink } from "react-router-dom";
import { bounce } from 'react-animations';
import style from "./style-header.module.css";
// import styled from "styled-components";

import styled, { keyframes } from 'styled-components';
// import './style.css';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinity`;

let Header = (props) => {
  // debugger

  let liItems = props.svgList.map((i, index) =><NavLink key={index} to={i.link}> <li >{i.code}</li></NavLink>);

  let animation = style.upDown
// console.log('asdas')
  // setTimeout(()=> animation = null, 10)
  // setTimeout(() => animation = style.upDown, 100)
  // props.onAnimation()
  let allClasses = style.amount + " " + (props.cart.order.length > 0 ? null : style.hide);
  // setTimeout(() => props.offAnimation(), 10) 
// console.log(allClasses)
// function chengeClasses() {
//   // allClasses = style.amount + " " + (props.cart.order.length > 0 ? null : style.hide);
//   // console.log(allClasses)
// }
//   setTimeout(chengeClasses, 10)
// console.log(animation)
// allClasses = style.amount + " " + (props.cart.order.length > 0 ? null : style.hide)
  return (
    <div onClick={props.offAnimation} className={style.header}>
      <div className={style.logo}>
        <NavLink to="/">
        <img src={props.srcLogo} alt="Logo" />
        </NavLink>
      </div>
      <ul className={style.navBarUl}>
        {liItems}
        <Bounce>

        <div className={allClasses}>
        {props.cart.order.length}
        </div>
        </Bounce>
        <button className={style.btn} onClick={props.openMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </ul>
    </div>
  );
};

export default Header;
