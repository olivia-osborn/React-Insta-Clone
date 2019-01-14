import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

function PostContainer(props) {
    return (
        <div className="post-container">
            <div className="poster">
                <img className="thumbnail" src={props.post.thumbnailUrl} alt="user-thumbnail"/>
                <a href="" className="username">{props.post.username}</a>
            </div>
            <img className="content" src={props.post.imageUrl} alt="insta-pic"/>
            <p>{props.post.likes} likes</p>
            <CommentSection listOfComments={props.post.comments} />
        </div>
    )
}


export default PostContainer;