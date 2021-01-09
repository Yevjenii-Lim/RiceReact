import React from "react";
import style from "./style-header.module.css";


let Header = (props) => {

    let showMenu = props.state.isMobileMenuOpen ? style.openMenu : style.closeMenu
    let mobileClasess = style.mobileMenu + " " + showMenu
    return (
        <div className={style.header}>
            <div>Logo</div>
            <div>Home</div>
            <div>backet</div>
            <button onClick={props.openMenu} >burger</button>
            <div className={mobileClasess}>
                <p>HELLO</p>
                <button onClick={props.openMenu}> close</button>
            </div>
        </div>
    )
}

export default Header