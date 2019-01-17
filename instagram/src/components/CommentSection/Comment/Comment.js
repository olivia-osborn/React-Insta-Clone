import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Username from "../../../ReusableStyles/Username"

const StyledComment = styled.div`
    display: flex;
    padding: 0;
    line-height: 0;
    margin: 10px 0;
`
const CommentText = styled.p`
    margin: 0px 5px 20px 5px;
`

function Comment(props) {
    return (
        <StyledComment>
            <Username className="username" href="null">{props.comment.username}</Username>
            <CommentText className="comment-text">{props.comment.text}</CommentText>
        </StyledComment>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;