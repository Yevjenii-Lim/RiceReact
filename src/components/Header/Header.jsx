import React from "react";
import { NavLink } from "react-router-dom";
import Instagram from "../../assets/svgIcons/instagram";
import PhoneCall from "../../assets/svgIcons/PhoneCall";
// import { bounce } from 'react-animations';
import style from "./style-header.module.css";
// import styled from "styled-components";

// import styled, { keyframes } from 'styled-components';
// import './style.css';

// const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinity`;

let Header = (props) => {
  // debugger

  let liItems = props.svgList.map((i, index) => (
    <NavLink key={index} to={i.link} className={i.hide ? style.secrete : null}>
      {" "}
      <li className={i.link === '/cart' ? style.cart : null}>{i.code}</li>
    </NavLink>
  ));

  let allClasses =
    style.amount + " " + (props.cart.order.length > 0 ? null : style.hide);

  return (
    <div onClick={props.offAnimation} className={style.header}>
      <div className={style.logo}>
        <NavLink to="/">
          <img src={props.srcLogo} alt="Logo" />
        </NavLink>
      </div>
      <ul className={style.navBarUl}>
        <a className={ style.secrete} href="https://www.instagram.com/rice_sushi_bar/?hl=ru"><Instagram> </Instagram></a>
        <a className={ style.secrete}  href="tel:+380669105250"> <PhoneCall></PhoneCall> </a>
        {liItems}

        <div className={allClasses}>
          {props.cart.order.reduce((a, i) => a + i.amount, 0)}
        </div>

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
