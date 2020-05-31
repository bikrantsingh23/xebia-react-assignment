import React, { Component } from 'react';
import "./ProductListing.css";
import Header from './Header';
import Footer from './Footer';
import FilterBar from './FilterBar';
import Catelog from './Catelog';

export class ProductListing extends Component {

    render() {
        return (
            <div className="main-div">
                <main className="inner-div">
                    <Header />
                    <section className="section-middle">
                        <FilterBar />
                        <Catelog />
                    </section>
                    <Footer />
                </main>
            </div>
        )
    }
}

export default ProductListing
