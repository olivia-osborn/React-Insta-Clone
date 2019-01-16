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
      searchInput: ""
    }
    console.log(dummyData)
  }

  componentDidMount() {
    this.setState({dummyData: dummyData})
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value});
}

  search = e => {
    e.preventDefault();
    let searchMatches = []
    dummyData.forEach(post => {
      if (post.username === this.state.searchInput) {
        searchMatches.push(post)
      } else {
      }
    })
    console.log(searchMatches);
    if (searchMatches.length > 0) {
      this.setState({dummyData: searchMatches})
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
        dummyData={this.state.dummyData}
        handleChanges={this.handleChanges}
        search={this.search}
        searchInput={this.state.searchInput}
        />
        {this.state.dummyData.map((post, index) => {
          return (
            <PostContainer 
            post={post} 
            key={index}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
