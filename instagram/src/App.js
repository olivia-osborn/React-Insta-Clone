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
      searchInput: "",
      filteredPosts: [],
      // isSearching: false,
    }
  }

  componentDidMount() {
    this.setState({posts: dummyData})
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value});
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
        searchInput= {this.state.searchInput}
        filteredPosts={this.state.filteredPosts}
        user={this.props.user}
        // isSearching = {this.state.isSearching}
        />
      </div>
    );
  }
}

export default authenticate(App)(Login);








  // search = e => {
  //   // e.preventDefault();
  //   console.log(e.target.value)
  //   this.setState(this.searchCallback(this.state, e.target.value))
  // }

  // searchCallback = (obj, string) => {
  //   console.log(string)
  //   if (string.length > 0) {
  //     let searchMatches = obj.dummyData.filter(post => 
  //       post.username === string
  //     ) 
  //     obj.filteredPosts = searchMatches;
  //     obj.searchInput = string;
  //     obj.isSearching = true
  //   } else if (string.length === 0) {
  //     obj.isSearching = false
  //   }
  //   return obj
  // }
