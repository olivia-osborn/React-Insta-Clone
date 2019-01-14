import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

function PostContainer(props) {
    return (
        <div className="post-container">
            <img src={props.post.thumbnailUrl} alt="user-thumbnail"/>
            <p>{props.post.username}</p>
            <img src={props.post.imageUrl} alt="insta-pic"/>
            <p>{props.post.likes}</p>
            <CommentSection listOfComments={props.post.comments} />
        </div>
    )
}


export default PostContainer;