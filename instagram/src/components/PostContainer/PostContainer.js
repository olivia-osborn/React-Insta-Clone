import React from 'react';
import "./PostContainer.css";
import styled from "styled-components";
// import PropTypes from "prop-types";
import Post from "./Post";

const StyledPostContainer = styled.div`
    width: 600px;
    margin: auto;
    padding-top: 100px;
`

function PostContainer(props) {
        return (
            <StyledPostContainer >
                {props.posts.map((post) => <Post key={post.timestamp} post={post} user={props.user}/>)}
            </StyledPostContainer>
        )
    }

// CommentSection.propTypes = {
//     post: PropTypes.object
// }

export default PostContainer;