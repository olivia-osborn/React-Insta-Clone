import React from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

function PostsPage(props) {
    return (
        <div>
            <SearchBar 
            dummyData={props.posts}
            handleChanges={props.handleChanges}
            search={props.search}
            searchInput={props.searchInput}
            />
            <PostContainer
                user = {props.user}
                posts = {
                    props.filteredPosts.length > 0 ? props.filteredPosts : props.posts
                }
            />
        </div>
    )
}

export default PostsPage;








            // {/* {console.log("length:" ,props.filteredPosts.length)}
            // {console.log(props.filteredPosts)} */}
            // {/*if filteredPosts has items in it, map through it and return a postcontainer that has filteredPosts passed down, otherwise, pass down dummyData:*/}
            // {/* {(props.filteredPosts.length > 0) ? 
            // (props.filteredPosts.map((post, index) => <PostContainer post={post} key={index} user= {props.user}/>)) 
            // : 
            // (props.dummyData.map((post, index) => <PostContainer post={post} key={index} user= {props.user}/>))} */}
            
            
            // {/* { props.isSearching ? props.filteredPosts.map((post, index) => <PostContainer post={post} key={index} username= {props.username}/>)
            // :
            // props.dummyData.map((post, index) => <PostContainer post={post} key={index} username= {props.username}/>)
            // } */}
            // {/* {props.filteredPosts.map((post, index) => <PostContainer post={post} key={index} username= {props.username}/>)}
            // {props.dummyData.map((post, index) => <PostContainer post={post} key={index} username= {props.username}/>)} */}