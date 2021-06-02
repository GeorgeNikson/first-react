import React from "react";
import style from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={style.item}>
                <a href="/news_feed">News feed</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a href="/messages">Messages</a>
            </div>
            <div className={style.item}>
                <a href="/music">Music</a>
            </div>
            <div className={style.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;