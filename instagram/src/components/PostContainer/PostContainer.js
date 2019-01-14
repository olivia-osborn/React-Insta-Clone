import React from "react";
import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props) {
    // return(
    //     <div>
    //         {props.userData.map(dataPiece => {
    //             return <CommentSection dataPiece={dataPiece}/>
    //         })}
    //     </div>
    // )
    return (
        <CommentSection/>
    )
}

export default PostContainer;