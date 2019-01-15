import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
    return(
        <div className="search-bar">
            <div>
                <img className="logo" src={require("./instagram-logo.png")} alt="insta-logo"/>
                <img className="title" src={require("./instagram-logo-text-black-png.png")} alt="insta-title" />
            </div>
            <input className="search" type="text" placeHolder="Search"/>
            <div>
                <a className="icon" href="null"><img src={require("./navigation.png")} alt="nav-icon"/></a>
                <a className="icon" href="null"><img src={require("./heart.png")} alt="heart-icon"/></a>
                <a className="icon" href="null"><img src={require("./user.png")} alt="user-icon"/></a>
            </div>
        </div>
    )
}

export default SearchBar;