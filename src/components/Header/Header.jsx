import React from "react";
import style from "./style-header.module.css";


let Header = (props) => {
    // debugger
    let showMenu = props.isMobileMenuOpen ? style.openMenu : style.closeMenu;
    
    let mobileClasess = style.mobileMenu + " " + showMenu;
   
    return (
        <div className={style.header}>
            <div className={style.logo}><img src={props.srcLogo} alt="Logo"/></div>
            <ul>
                {props.svgList.map((i,index) => <li key={index} >{i.code}</li>)}
            </ul>
            <button onClick={props.openMenu} >burger</button>
            <div className={mobileClasess}>
                <p>HELLO</p>
                <button onClick={props.openMenu}> close</button>
            </div>
        
          
        </div>
    )
}

export default Header