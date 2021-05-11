import React from "react";
import MyPostsStyle from "./MyPosts.module.css";
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
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;