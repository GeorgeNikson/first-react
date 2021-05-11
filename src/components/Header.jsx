import React from "react";
import HeaderStyle from"../styles/Header.module.css";
function Header() {
    return(
        <header className={HeaderStyle.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" />
        </header>
    );
}

export default Header;