import React from "react";
import style from "./Content.module.css";
import Posts from "./MyPosts/MyPosts";
import ContentImg from "../../assets/images/Content.jpg";

function Content() {
    return (
        <div>
            <div>
                <img src={ContentImg} />
            </div>
            <div>
                ava + description
            </div>
            <Posts />
        </div>
    );
}

export default Content;