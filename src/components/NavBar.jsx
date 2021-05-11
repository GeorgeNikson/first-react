import React from "react";
import NavStyles from "../styles/NavBar.module.css";

function NavBar() {
    return (
        <nav className={NavStyles.nav}>
            <div className={NavStyles.item}>
                <a>Profile</a>
            </div>
            <div className={NavStyles.item}>
                <a>News feed</a>
            </div>
            <div className={`${NavStyles.item} ${NavStyles.active}`}>
                <a>Messages</a>
            </div>
            <div className={NavStyles.item}>
                <a>Music</a>
            </div>
            <div className={NavStyles.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;