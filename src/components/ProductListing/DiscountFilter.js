import React, { Component } from 'react'
import { connect } from 'react-redux';

export class DiscountFilter extends Component {
    render() {
        const { minDiscount, maxDiscount } = this.props;
        return (
            <>
                <div className="filter-items price-discount-div">
                    Discount
                    <div className="range-div">
                        <div className="dropdown-div">
                            <select id="mindiscount" name="mindiscount">
                                {minDiscount.map((itemDiscount) => (
                                    <option key={itemDiscount.key} value={itemDiscount.key}>{itemDiscount.value}</option>
                                ))}
                            </select>
                        </div>
                        <div className="dropdown-div">
                            <select id="maxdiscount" name="maxdiscount">
                                {maxDiscount.map((itemDiscount) => (
                                    <option key={itemDiscount.key} value={itemDiscount.key}>{itemDiscount.value}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        minDiscount: state.productReducer.minDiscount,
        maxDiscount: state.productReducer.maxDiscount
    };
};

export default connect(mapStateToProps)(DiscountFilter)
