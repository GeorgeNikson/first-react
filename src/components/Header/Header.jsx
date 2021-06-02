import React from "react";
import style from"./Header.module.css";
import logo from "../../assets/images/logo.png";

function Header() {
    return(
        <header className={style.header}>
            <img src={logo} alt=""/>
        </header>
    );
}

export default Header;