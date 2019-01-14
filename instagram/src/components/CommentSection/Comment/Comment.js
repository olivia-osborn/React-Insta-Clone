import React from "react";
import PropTypes from "prop-types";

function Comment(props) {
    return (
        <div>
            <p className="username">{props.comment.username}</p>
            <p>{props.comment.text}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;