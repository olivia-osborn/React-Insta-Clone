import React from "react";

function Comment(props) {
    return (
        <div>
            <p>{props.comment.username}</p>
            {/* <p>{props.comment.text}</p> */}
        </div>
    )
}

export default Comment;