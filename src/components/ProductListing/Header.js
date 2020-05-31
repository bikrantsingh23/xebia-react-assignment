import React, { Component } from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { ReactComponent as UserIcon } from '../../images/user.svg';
import { ReactComponent as CartIcon } from '../../images/cart.svg';
import { connect } from 'react-redux';

export class Header extends Component {
    render() {
        return (
            <>
                <header className="header-main">
                    <div className="header-inner">
                        <div className="header-left">
                            <LogoIcon className="logo-icon" />
                        </div>
                        <div className="header-middle">
                            <input className="text-search" type="text"
                                name="search" placeholder="Search Product" />
                        </div>
                        <div className="header-right">
                            <div className="user-cart-div">
                                <div className="icon-div">
                                    <UserIcon className="user-icon" />
                                </div>
                                <div className="usericon-text-div">
                                    Welcome {this.props.userData.length > 0 ?
                                        this.props.userData[0].fullName : ''}
                                </div>
                            </div>
                            <div className="user-cart-div">
                                <div className="icon-div">
                                    <CartIcon className="cart-icon" />
                                </div>
                                <div className="usericon-text-div">
                                    1 Item
                                    </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.loginReducer.userData,
        errMsg: state.loginReducer.errMsg
    };
};

export default connect(mapStateToProps)(Header)
