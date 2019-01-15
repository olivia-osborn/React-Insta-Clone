import React, { Component } from 'react';
import Comment from "./Comment/Comment";
import "./CommentSection.css";

class CommentSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: props.listOfComments
        }
    }

    
    render() {
        return(
            <div>
                <div className="comments">
                    {this.state.comments.map((comment, index) => {
                        return <Comment comment={comment} key={index}/>;
                    })}
                </div>
                <input className="add-comment" type="text" placeholder="Add a comment..."/>
            </div>
        )
    }
}

export default CommentSection;