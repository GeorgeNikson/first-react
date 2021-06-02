import style from "./Dialogs.module.css";
import avatar from "../../assets/images/PostImg.png";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                <div className={`${style.item}`}>
                    <NavLink to="/messages/1" activeClassName={style.active}><img src={avatar}/> Eren</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/messages/2" activeClassName={style.active}><img src={avatar}/> Levi</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/messages/3" activeClassName={style.active}><img src={avatar}/> Mikasa</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/messages/4" activeClassName={style.active}><img src={avatar}/> Armin</NavLink>
                </div>
            </div>
            <div className={style.dialogs_messages}>
                <div className={style.message}>Shinzo Sasageyo?</div>
                <div className={style.message}>Shinzo Sasageyo!</div>
            </div>
        </div>
    );
}

export default Dialogs;