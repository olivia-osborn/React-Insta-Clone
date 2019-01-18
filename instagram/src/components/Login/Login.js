import React, {Component} from "react";

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
            <form>
                <input
                type="text"
                placeholder="username"
                value={this.state.username}
                name="username"
                onChange={this.handleLoginChanges}
                />
                <input
                type="password"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleLoginChanges}
                />
                <button onClick={this.login}>Submit</button>
            </form>
        )
    }
}

export default Login;