import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AddComment = styled.input`
    width: 100%;
    height: 30px;
    font-size: 16px;
    padding-left: 10px;
    border: none;
`

function CommentForm(props) {
    const { addNewComment, newComment, handleChanges} = props;
    return (
        <form onSubmit={addNewComment}>
            <AddComment
                value={newComment}
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