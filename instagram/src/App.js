import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostsPage from "./components/PostContainer/PostsPage";
import authenticate from "./authentication/authenticate";
import Login from "./components/Login/Login"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filteredPosts: [],
    }
  }

  componentDidMount() {
    this.setState({posts: dummyData})
  }

  search = e => {
    // eslint-disable-next-line
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({filteredPosts: posts});
  };

  render() {
    console.log("when rendering, filtered posts:", this.state.filteredPosts)
    return (
      <div className="App">
        <PostsPage 
        posts = {this.state.posts}
        handleChanges = {this.handleChanges}
        search = {this.search}
        filteredPosts={this.state.filteredPosts}
        user={this.props.user}
        />
      </div>
    );
  }
}

export default authenticate(App)(Login);