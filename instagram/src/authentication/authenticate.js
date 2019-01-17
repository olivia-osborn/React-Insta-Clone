import React from "react";

const authenticate = App => LoginPage => {
    return class extends React.Component {
            constructor(props) {
                super(props)
                this.state = {
                    loggedIn: false,
                    username: ""
                }
            }
            componentDidMount() {
                if (localStorage.getItem("username")) {
                    this.setState({
                        loggedIn: true,
                        username: localStorage.getItem("username")
                    })
                    }
            }
            render() {
                return <App />
            }
        }
}

export default authenticate;
