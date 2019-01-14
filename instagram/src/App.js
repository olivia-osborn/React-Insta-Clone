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
      comments: dummyData.map((user) => {
        return user.comments
      })
    }
    console.log(this.state.comments);
    console.log(this.state.comments.map(listOfComments => {return listOfComments.username}))
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <PostContainer listOfCommentsLists={this.state.comments}/>
      </div>
    );
  }
}

export default App;
