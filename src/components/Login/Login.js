import React, { Component } from 'react'
import './Login.css';
import { USERNAME_MESSAGE, PASSWORD_MESSAGE, CREDENTIALS_WARNING } from '../../config/Constants';
import { connect } from 'react-redux';
import { userLoginService } from '../../actions';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', errMsg: '' };
    }

    //Chnage Handler
    changeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    //Check input validation
    loginValidation = () => {
        let message = "";
        if (this.state.username.trim() === "") {
            message = USERNAME_MESSAGE;
        }
        else if (this.state.password.trim() === "") {
            message = PASSWORD_MESSAGE;
        }
        return message;
    }

    //Login Handler
    loginHandler = (event) => {
        event.preventDefault();
        let errorMsg = this.loginValidation();

        if (errorMsg.trim() === "") {
            this.props.userLogin(this.state.username, this.state.password);
        }
        else {
            this.setState({ errMsg: errorMsg });
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errMsg !== '') {
            this.setState({ errMsg: nextProps.errMsg });
        } else if (nextProps.userData.length === 0) {
            this.setState({ errMsg: CREDENTIALS_WARNING });
        } else if (nextProps.userData.length > 0) {
            this.props.history.push("/products");
        }
    }

    render() {
        return (
            <div className="login-main-div">
                <div className="login-inner-div">
                    <div className="login-heading-div">
                        <h1 className="login-heading">sCart</h1>
                    </div>
                    {this.state.errMsg !== '' ?
                        <div id="alertMsg" className="alert-div">
                            {this.state.errMsg}
                        </div> : ""}
                    <div className="form-div">
                        <form onSubmit={this.loginHandler}>
                            <input className="text-input" name="username" type="text"
                                placeholder="username" onChange={this.changeHandler} />
                            <br />
                            <input className="text-input" name="password" type="password"
                                placeholder="password" onChange={this.changeHandler} />
                            <br />
                            <input type="submit" className="login-button" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.loginReducer.userData,
        errMsg: state.loginReducer.errMsg
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (username, password) => dispatch(userLoginService(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
