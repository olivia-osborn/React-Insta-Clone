import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

function PostContainer(props) {
    return (
        <div className="post-container">
            <CommentSection listOfComments={props.post.comments} />
        </div>
    )
}


export default PostContainer;