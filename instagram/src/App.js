import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    this.setState({dummyData: dummyData})
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        {this.state.dummyData.map((post, index) => {
          return (
            <PostContainer post={post} key={index}/>
          )
        })}
      </div>
    );
  }
}

export default App;
