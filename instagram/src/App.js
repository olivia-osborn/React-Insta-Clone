import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

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
    console.log("rendering")
    console.log("when I'm rendering, dummyData = " , this.state.filteredPosts)
    return (
      <div className="App">
        <SearchBar 
        dummyData={this.state.dummyData}
        handleChanges={this.handleChanges}
        search={this.search}
        searchInput={this.state.searchInput}
        />
        {this.state.filteredPosts.length > 0 ? (this.state.filteredPosts.map((post, index) => <PostContainer post={post} key={index}/>)) : (this.state.dummyData.map((post, index) => <PostContainer post={post} key={index}/>))} 
      </div>
    );
  }
}

export default App;

