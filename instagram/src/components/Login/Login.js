import React, {Component} from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
    width: 500px;
    height: 500px;
    margin: 150px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const LoginTitle = styled.img`
    width: 200px;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LoginInput = styled.input`
    width: 300px;
    padding: 10px 10px;
    margin: 10px 0;
    font-size: 16px;
`

const LoginButton = styled.button`
    border: 1px solid gray;
    background: lightgray;
    font-size: 16px;
    padding: 5px 60px;

    &:hover {
        cursor: pointer;
        background: gray;
    }
`

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    login = e => {
        e.preventDefault()
        const user = this.state.username;
        localStorage.setItem("user", user);
        if (this.state.password) {
            window.location.reload();
        }
    }
    
    handleLoginChanges = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <LoginContainer>
                <LoginTitle src={require("../SearchBar/instagram-logo-text-black-png.png")} alt="insta-title"/>
                <LoginForm>
                    <LoginInput
                    type="text"
                    placeholder="username"
                    value={this.state.username}
                    name="username"
                    onChange={this.handleLoginChanges}
                    />
                    <LoginInput
                    type="password"
                    placeholder="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleLoginChanges}
                    />
                    <LoginButton onClick={this.login}>Submit</LoginButton>
                </LoginForm>
            </LoginContainer>
        )
    }
}

export default Login;