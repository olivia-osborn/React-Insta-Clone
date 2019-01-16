import React from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

function PostsPage(props) {
    return (
        <div>
            <SearchBar 
            dummyData={props.dummyData}
            handleChanges={props.handleChanges}
            search={props.search}
            searchInput={props.searchInput}
            />
            {props.filteredPosts.length > 0 ? (props.filteredPosts.map((post, index) => <PostContainer post={post} key={index}/>)) : (props.dummyData.map((post, index) => <PostContainer post={post} key={index}/>))}  
        </div>
    )
}

export default PostsPage;