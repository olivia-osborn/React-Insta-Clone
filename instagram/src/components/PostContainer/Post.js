import React, {Component} from "react";
import CommentSection from "../CommentSection/CommentSection";
import styled from "styled-components";
import Icon from "../../ReusableStyles/Icon";
import Username from "../../ReusableStyles/Username"

const StyledPost = styled.div`
    margin-bottom: 50px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

const Content = styled.img`
    height: 600px;
    width: 599px;
`

const Likes = styled.p`
    font-weight: bold;
    margin: 10px;
    margin-bottom: 20px;
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
                <Likes className="likes">{this.state.likes} likes</Likes>
                <CommentSection listOfComments={this.state.post.comments} user={this.props.user}/>
            </StyledPost>
        )
    }
}

export default Post;