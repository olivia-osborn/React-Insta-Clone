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
        e.preventDefault();
        const username = this.state.username
        localStorage.setItem("username", username)
        // window.location.reload()
    }
    
    handleChanges = e => {
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
                onChange={this.handleChanges}
                />
                <input
                type="text"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChanges}
                />
                <button onClick={this.login}>Submit</button>
            </form>
        )
    }
}

export default Login;