import React from "react";
import Comment from "./Comment/Comment";
import "./CommentSection.css";

function CommentSection(props) {
    return(
        <div>
            <div className="comments">
                {props.listOfComments.map((comment, index) => {
                    return <Comment comment={comment} key={index}/>;
                })}
            </div>
            <input className="add-comment" type="text" placeholder="Add a comment..."/>
        </div>
    )
}

export default CommentSection;