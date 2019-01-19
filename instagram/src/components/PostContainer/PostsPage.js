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





