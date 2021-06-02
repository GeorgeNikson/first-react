import React from "react";
import NavStyles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={NavStyles.nav}>
            <div className={NavStyles.item}>
                <a href="/">Profile</a>
            </div>
            <div className={NavStyles.item}>
                <a href="/">News feed</a>
            </div>
            <div className={`${NavStyles.item} ${NavStyles.active}`}>
                <a href="/">Messages</a>
            </div>
            <div className={NavStyles.item}>
                <a href="/">Music</a>
            </div>
            <div className={NavStyles.item}>
                <a href="/">Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;