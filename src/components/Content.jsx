import React from "react";
import ContentStyle from "../styles/Content.module.css";

function Content() {
    return (
        <div className={ContentStyle.content}>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div className={ContentStyle.posts}>
                    <div className={ContentStyle.item}>
                        Post 1
                    </div>
                    <div className={ContentStyle.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;