import React from "react";

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

export default CommentForm;