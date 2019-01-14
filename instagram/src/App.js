import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
      postList: dummyData.map(post => {
        return post
      })
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        {this.state.postList.map(post => {
          return (
            <PostContainer post={post}/>
          )
        })}
      </div>
    );
  }
}

export default App;
