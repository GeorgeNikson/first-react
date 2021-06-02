import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

function Posts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add new post</button>
                <button>Delete</button>
            </div>
            <Post message="It's my first post"/>
            <Post message="I am learning react!"/>
            <Post />
            <Post />
        </div>
    );
}

export default Posts;