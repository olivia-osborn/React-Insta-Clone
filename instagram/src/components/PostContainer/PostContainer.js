import React from 'react';
import "./PostContainer.css";
// import PropTypes from "prop-types";
import Post from "./Post";

function PostContainer(props) {
        return (
            <div className="post-container">
                {props.posts.map((post) => <Post post={post} user={props.user}/>)}
            </div>
        )
    }

// CommentSection.propTypes = {
//     post: PropTypes.object
// }

export default PostContainer;