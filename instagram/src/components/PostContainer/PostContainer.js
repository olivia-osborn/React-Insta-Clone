import React, { Component } from 'react';
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";
import PropTypes from "prop-types";

class PostContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: props.post,
            likes: props.post.likes
        }
    }
    
    addLike = e => {
        this.setState(prevState => ({likes: ++prevState.likes}))
        console.log(this.state.likes)
      }

    render() {
        return (
            <div className="post-container">
                <div className="poster">
                    <img className="thumbnail" src={this.state.post.thumbnailUrl} alt="user-thumbnail"/>
                    <a href="placeholder" className="username">{this.state.post.username}</a>
                </div>
                <img className="content" src={this.state.post.imageUrl} alt="insta-pic"/>
                <i onClick = {this.addLike} className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <p className="likes">{this.state.likes} likes</p>
                <CommentSection listOfComments={this.state.post.comments} username={this.props.username}/>
            </div>
        )
    }
}

CommentSection.propTypes = {
    post: PropTypes.object
}

export default PostContainer;