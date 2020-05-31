import React, { Component } from 'react';
import "./ProductListing.css";
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { ReactComponent as UserIcon } from '../../images/user.svg';
import { ReactComponent as CartIcon } from '../../images/cart.svg';
import { ReactComponent as ResetIcon } from '../../images/reset.svg';
import { ReactComponent as AddIcon } from '../../images/add.svg';

export class ProductListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            product: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        }
    }
    render() {
        return (
            <div className="main-div">
                <main className="inner-div">
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
                                        Welcome Bikrant
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
                    <section className="section-middle">
                        <aside className="side-left">
                            <div className="filter-div-top">
                                <div className="filter-text">
                                    Filter
                                </div>
                                <div className="reset-icon-div">
                                    <ResetIcon className="reset-icon" />
                                    Reset
                                </div>
                            </div>
                            <div className="filter-div-bottom">
                                <div className="filter-items">
                                    Color
                                    <div className="color-brand-div">
                                        {this.state.brand.map((data, index) => (
                                            <div className="checkbox-item" key={`${index + 1}`}>
                                                <input type="checkbox" id="fruit1" name="fruit" value="Apple" />
                                                <label htmlFor="fruit1">Apple</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="filter-items">
                                    Brand
                                    <div className="color-brand-div">
                                        {this.state.brand.map((data, index) => (
                                            <div className="checkbox-item" key={`${index + 1}`}>
                                                <input type="checkbox" id="fruit1" name="fruit" value="Apple" />
                                                <label htmlFor="fruit1">Apple</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="filter-items price-discount-div">
                                    Price
                                    <div className="range-div">
                                        <div className="dropdown-div">
                                            <select id="minprice" name="minprice">
                                                <option value="min">Min</option>
                                            </select>
                                        </div>
                                        <div className="dropdown-div">
                                            <select id="maxprice" name="maxprice">
                                                <option value="max">Max</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-items price-discount-div">
                                    Discount
                                    <div className="range-div">
                                        <div className="dropdown-div">
                                            <select id="mindiscount" name="mindiscount">
                                                <option value="min">Min</option>
                                            </select>
                                        </div>
                                        <div className="dropdown-div">
                                            <select id="maxdiscount" name="maxdiscount">
                                                <option value="max">Max</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <aside className="side-right">
                            <div className="grid-column">
                                {this.state.brand.map((data, index) => (
                                    <div className="cateloge-main" key={`${index + 1}`}>
                                        <div className="pimage-div">
                                            <img className="pimage" src="" alt="" />
                                            <div className="product-discount">
                                                10%
                                    </div>
                                        </div>
                                        <div className="details-div">
                                            <div className="ditail-inner">
                                                <div className="pname-div">
                                                    Product A
                                        </div>
                                                <div className="pcolor-div">
                                                    <p>Color</p>
                                                    <div className="color-div"></div>
                                                </div>
                                            </div>
                                            <div className="ditail-inner">
                                                <div className="pbrand-div">
                                                    Brand A
                                        </div>
                                                <div className="padd-div">
                                                    <div className="add-button-div">
                                                        <AddIcon className="add-icon" />
                                                        <p>Add</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ditail-inner">
                                                <div className="price-div">
                                                    10$
                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </section>
                    <footer className="footer-main">
                        <div className="abc-div"> @abc.com</div>
                        <h2>sCart</h2>
                    </footer>
                </main>
            </div>
        )
    }
}

export default ProductListing
