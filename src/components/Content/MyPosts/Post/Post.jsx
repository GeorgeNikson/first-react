import React from "react";
import style from "./Post.module.css";
import PostImg from "../../../../assets/images/PostImg.png";

function Post(props) {
    return (
        <div className={style.item}>
            <img src={PostImg}/>
            {props.message}
            <div>
                <span>Like </span>
                <span>Repost</span>
            </div>
        </div>
    );
}

export default Post;