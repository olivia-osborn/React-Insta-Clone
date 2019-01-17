import React, {Component} from "react";
import CommentSection from "../CommentSection/CommentSection";

class Post extends Component {
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
            <div>
                <div className="poster">
                    <img className="thumbnail" src={this.state.post.thumbnailUrl} alt="user-thumbnail"/>
                    <a href="placeholder" className="username">{this.state.post.username}</a>
                </div>
                <img className="content" src={this.state.post.imageUrl} alt="insta-pic"/>
                <i onClick = {this.addLike} className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <p className="likes">{this.state.likes} likes</p>
                <CommentSection listOfComments={this.state.post.comments} user={this.props.user}/>
            </div>
        )
    }
}

export default Post;