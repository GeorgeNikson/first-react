import React from "react";
import PostStyle from "./Post.module.css";

function Post() {
    return (
        <div className={PostStyle.item}>
            <img src="http://i.imgur.com/HQ3YU7n.gif" />
            Post 1
            <div>
                <span>Like</span>
                <span>Repost</span>
            </div>
        </div>
    );
}

export default Post;