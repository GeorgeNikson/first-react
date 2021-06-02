import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news_feed" activeClassName={style.active}>News feed</NavLink>
            </div>
            <div className={`${style.item}`}>
                <NavLink to="/messages" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;