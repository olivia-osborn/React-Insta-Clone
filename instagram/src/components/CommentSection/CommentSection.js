import React from "react";
import Comment from "./Comment/Comment";

function CommentSection(props) {
    return(
        props.listOfComments.map(comment => {
            return <Comment comment={comment}/>;
        })
    )
}

export default CommentSection;