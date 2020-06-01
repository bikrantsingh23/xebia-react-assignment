import React, { Component } from 'react'
import { connect } from 'react-redux';
import { filterByDiscount } from '../../actions';
import { DISCOUNT_FILTER_WARNING } from '../../config/Constants';

let minValue;
let maxValue;
export class DiscountFilter extends Component {

    filterByDiscount = (event) => {
        let discountList = [];
        if (event.target.name === "mindiscount"
            && event.target.value !== 'Min') {
            minValue = event.target.value;
        }

        if (event.target.name === "maxdiscount"
            && event.target.value !== 'Max') {
            maxValue = event.target.value;
        }

        if (minValue !== undefined && maxValue !== undefined) {
            if (Number(minValue) < Number(maxValue)) {
                discountList.push({ 'minValue': minValue });
                discountList.push({ 'maxValue': maxValue });
                this.props.discountFilter(discountList);
            } else {
                alert(DISCOUNT_FILTER_WARNING);
            }
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.reset === 'reset') {
            minValue = undefined;
            maxValue = undefined;
        }
    }

    render() {
        const { minDiscount, maxDiscount } = this.props;
        return (
            <>
                <div className="filter-items price-discount-div">
                    Discount
                    <div className="range-div">
                        <div className="dropdown-div">
                            <select id="mindiscount" name="mindiscount" onChange={this.filterByDiscount}>
                                {minDiscount.map((itemDiscount) => (
                                    <option key={itemDiscount.key} value={itemDiscount.key}>{itemDiscount.value}</option>
                                ))}
                            </select>
                        </div>
                        <div className="dropdown-div">
                            <select id="maxdiscount" name="maxdiscount" onChange={this.filterByDiscount}>
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
        maxDiscount: state.productReducer.maxDiscount,
        reset: state.productReducer.reset
    };
};

const mapDispatchToProps = dispatch => {
    return {
        discountFilter: (discountList) => dispatch(filterByDiscount(discountList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscountFilter)
