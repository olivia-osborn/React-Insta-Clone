import React from "react";
import Comment from "./Comment/Comment";
import "./CommentSection.css";

function CommentSection(props) {
    return(
        <div>
            <div className="comments">
                {props.listOfComments.map(comment => {
                    return <Comment comment={comment}/>;
                })}
            </div>
            <input className="add-comment" type="text" placeholder="Add a comment..."/>
        </div>
    )
}

export default CommentSection;