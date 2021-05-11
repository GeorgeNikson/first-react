import React from "react";
import ContentStyle from "./Content.module.css";
import Posts from "./MyPosts/MyPosts";

function Content() {
    return (
        <div className={ContentStyle.content}>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
            </div>
            <div>
                ava + description
            </div>
            <Posts />
        </div>
    );
}

export default Content;