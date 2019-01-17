import React, { Component } from 'react';
import Comment from "./Comment/Comment";
import CommentForm from "./CommentForm/CommentForm";
import styled from "styled-components";
import PropTypes from "prop-types"

const Comments = styled.div`
    border-bottom: 1px solid lightgray;
    margin: 10px;
`


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
                {text: this.state.newComment, user: this.props.user}
            ],
            newComment: ""
        })
    }

    render() {
        return(
            <div>
                <Comments>
                    {this.state.comments.map((comment, index) => {
                        return <Comment comment={comment} key={index}/>;
                    })}
                </Comments>
                <CommentForm
                    addNewComment={this.addNewComment}
                    handleChanges={this.handleChanges}
                    newComment={this.state.newComment}
                />
            </div>
        )
    }
}

Comment.propTypes = {
    listOfComments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;