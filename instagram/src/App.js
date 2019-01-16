import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostsPage from "./components/PostContainer/PostsPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      searchInput: "",
      filteredPosts: []
    }
  }

  componentDidMount() {
    this.setState({dummyData: dummyData})
  }

  handleChanges = e => {
    console.log("handling change")
    this.setState({[e.target.name]: e.target.value});
}

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
        />
      </div>
    );
  }
}

export default App;

