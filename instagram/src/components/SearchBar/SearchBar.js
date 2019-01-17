import React from 'react';
// import "./SearchBar.css";
import styled from "styled-components";

const Header = styled.header`
    position: fixed;
    background: white;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
`

const LogoImage = styled.img`
    border-right: 2px solid lightgray;
    padding-right: 20px;
`

const TitleImage = styled.img`
    height: 40px;
    width: auto;
    margin-left: 20px;
    position: absolute;
`

const HeaderImages = styled.div`
    margin-left: 50px
`

const SearchInput = styled.input`
    text-align: center;
    height: 20px;
    width: 180px;
    background: rgb(247, 247, 247);
    border: 1px solid rgb(211, 211, 211);
`

const Icon = styled.i`
    margin-left: 30px;
    font-size: 20px;
`

const Icons = styled.div`
    margin-right: 50px;
`



function SearchBar(props) {
    return(
        <Header>
            <HeaderImages>
                <LogoImage src={require("./instagram-logo.png")} alt="insta-logo"/>
                <TitleImage src={require("./instagram-logo-text-black-png.png")} alt="insta-title" />
            </HeaderImages>
            <SearchInput 
                className="search" 
                type="text" 
                placeholder="Search"
                onKeyDown={props.search}
                name="searchInput"
            />

            <Icons>
                <Icon className="far fa-compass"/>
                <Icon className="far fa-heart"/>
                <Icon className="far fa-user"/>
            </Icons>
        </Header>
    )
}


export default SearchBar;