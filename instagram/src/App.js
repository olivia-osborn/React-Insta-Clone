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
      dummyData: [],
      searchInput: "",
      filteredPosts: [],
      // isSearching: false,
    }
  }

  componentDidMount() {
    this.setState({dummyData: dummyData})
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value});
}

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

  search = e => {
    e.preventDefault();
    let searchMatches = dummyData.filter(post => 
      post.username === this.state.searchInput
    )
    if (searchMatches.length > 0) {
      this.setState({filteredPosts: searchMatches})
    }
  }

  render() {
    return (
      <div className="App">
        <PostsPage 
        dummyData = {this.state.dummyData}
        handleChanges = {this.handleChanges}
        search = {this.search}
        searchInput= {this.state.searchInput}
        filteredPosts={this.state.filteredPosts}
        username={this.props.username}
        // isSearching = {this.state.isSearching}
        />
        <Login />
      </div>
    );
  }
}

export default authenticate(App)(Login);

