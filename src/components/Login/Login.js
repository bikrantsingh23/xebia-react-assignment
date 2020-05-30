import React, { Component } from 'react'
import './Login.css';

export class Login extends Component {

    loginHandler = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="login-main-div">
                <div className="login-inner-div">
                    <div className="login-heading-div">
                        <h1 className="login-heading">sCart</h1>
                    </div>
                    <div className="alert-div">
                        Username and Password is incorrect.
                </div>
                    <div className="form-div">
                        <form onSubmit={this.loginHandler}>
                            <input className="text-input" type="text" placeholder="username" />
                            <br />
                            <input className="text-input" type="password" placeholder="password" />
                            <br />
                            <input type="submit" className="login-button" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
