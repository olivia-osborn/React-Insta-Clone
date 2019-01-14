import React from "react";
import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props) {
    return (
        <div className="post-container">
            {props.listOfCommentsLists.map(listOfComments => {
                return <CommentSection listOfComments={listOfComments} />
            })}
        </div>
    )
}


export default PostContainer;