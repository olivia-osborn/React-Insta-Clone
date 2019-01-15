import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
    return(
        <div className="search-bar">
            <div>
                <img className="logo" src={require("./instagram-logo.png")} alt="insta-logo"/>
                <img className="title" src={require("./instagram-logo-text-black-png.png")} alt="insta-title" />
            </div>
            <input className="search" type="text" placeholder="Search"/>
            <div>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar;