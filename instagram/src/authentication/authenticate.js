import React from "react";

const authenticate = App => LoginPage => {
    return class extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    loggedIn: false,
                    // user: ""
                };
            }

            componentDidMount() {
                if (localStorage.getItem("user")) {
                    this.setState({
                        loggedIn: true,
                        // user: localStorage.getItem("user")
                    })
                }
            }
            render() {
                if (this.state.loggedIn) {
                    return <App />
                } else {
                    return <LoginPage />
                }
            }
        }
}

export default authenticate;
