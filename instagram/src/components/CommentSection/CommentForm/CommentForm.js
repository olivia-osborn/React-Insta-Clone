import React from "react";
import PropTypes from "prop-types";

function CommentForm(props) {
    const { addNewComment, newComment, handleChanges} = props;
    return (
        <form onSubmit={addNewComment}>
            <input 
                value={newComment}
                className="add-comment" 
                type="text" 
                placeholder="Add a comment..."
                onChange ={handleChanges}
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