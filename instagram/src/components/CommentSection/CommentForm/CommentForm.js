import React from "react";
import PropTypes from "prop-types";

function CommentForm(props) {
    return (
        <form onSubmit={props.addNewComment}>
            <input 
                value={props.newComment}
                className="add-comment" 
                type="text" 
                placeholder="Add a comment..."
                onChange ={props.handleChanges}
                name="newComment"
            />
        </form>
    )
}

Comment.propTypes = {
    addNewComment: PropTypes.func,
    handleChanges: PropTypes.func,
    newComment: PropTypes.string
}

export default CommentForm;