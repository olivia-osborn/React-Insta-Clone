import React, {Component} from "react";
import CommentSection from "../CommentSection/CommentSection";
import styled from "styled-components";
import Icon from "../../ReusableStyles";

const StyledPost = styled.div`
    margin-bottom: 50px;
    border: 1px solid black;
`

const Poster = styled.div`
    display: flex;
    align-items: center;
`

const Thumbnail = styled.img`
    height: 30px;
    width: auto;
    border-radius: 50%;
    margin: 10px;
`

const Username = styled.a`
    text-decoration: none;
    color: black;
    font-weight: bold;
`

const Content = styled.img`
    height: 600px;
    width: 599px;
`


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
            <StyledPost>
                <Poster className="poster">
                    <Thumbnail className="thumbnail" src={this.state.post.thumbnailUrl} alt="user-thumbnail"/>
                    <Username href="placeholder" className="username">{this.state.post.username}</Username>
                </Poster>
                <Content className="content" src={this.state.post.imageUrl} alt="insta-pic"/>
                <Icon onClick = {this.addLike} className="far fa-heart"></Icon>
                <Icon className="far fa-comment"></Icon>
                <p className="likes">{this.state.likes} likes</p>
                <CommentSection listOfComments={this.state.post.comments} user={this.props.user}/>
            </StyledPost>
        )
    }
}

export default Post;