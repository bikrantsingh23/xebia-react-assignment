import React, { Component } from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { ReactComponent as UserIcon } from '../../images/user.svg';
import { ReactComponent as CartIcon } from '../../images/cart.svg';
import { connect } from 'react-redux';
import { callProductService } from '../../actions';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    //Search Product based on product name
    searchProduct = (event) => {
        const { value } = event.target;
        this.props.getProducts(value);
    }

    //Redirect to login
    redirectToLogin = () => {
        if (this.props.userData.length < 1) {
            this.props.history.push("/");
        }
    }

    //Recieve new props to add cart
    UNSAFE_componentWillReceiveProps(nextProps) {
        let cartArr = JSON.parse(nextProps.cartItems);
        this.setState({ count: cartArr.length });
    }

    render() {
        return (
            <>
                {this.redirectToLogin()}
                <header className="header-main">
                    <div className="header-inner">
                        <div className="header-left">
                            <LogoIcon className="logo-icon" />
                        </div>
                        <div className="header-middle">
                            <input className="text-search" type="text"
                                name="search" placeholder="Search Product"
                                onChange={this.searchProduct} />
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
                                    {`${this.state.count} Item`}
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
        cartItems: state.productReducer.cartItems,
        errMsg: state.loginReducer.errMsg
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: (title) => dispatch(callProductService(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
