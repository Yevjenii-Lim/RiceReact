import React from "react";
import style from "./style-header.module.css";

let Header = (props) => {
  // debugger

  let liItems = props.svgList.map((i, index) => <li key={index}>{i.code}</li>);
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src={props.srcLogo} alt="Logo" />
      </div>

      <ul className={style.navBarUl}>
        {liItems}
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
