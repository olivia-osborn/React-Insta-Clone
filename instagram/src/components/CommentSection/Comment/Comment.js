import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";

function Comment(props) {
    return (
        <div className="comment">
            <a className="username" href="null">{props.comment.username}</a>
            <p className="comment-text">{props.comment.text}</p>
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