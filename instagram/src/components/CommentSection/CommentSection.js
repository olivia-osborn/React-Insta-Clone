import React, { Component } from 'react';
import Comment from "./Comment/Comment";
import "./CommentSection.css";
import CommentForm from "./CommentForm/CommentForm";

class CommentSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: props.listOfComments,
            newComment: ""
        }
    }

    handleChanges = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    addNewComment= e => {
        e.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments, 
                {text: this.state.newComment, username: "oliviaosborn"}
            ],
            newComment: ""
        })
    }

    render() {
        return(
            <div>
                <div className="comments">
                    {this.state.comments.map((comment, index) => {
                        return <Comment comment={comment} key={index}/>;
                    })}
                </div>
                <CommentForm
                    addNewComment={this.addNewComment}
                    handleChanges={this.handleChanges}
                    newComment={this.state.newComment}
                />
            </div>
        )
    }
}

export default CommentSection;