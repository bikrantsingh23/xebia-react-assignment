import React, { Component } from 'react'
import { connect } from 'react-redux';
import { filterByPrice } from '../../actions';
import { PRICE_FILTER_WARNING } from '../../config/Constants';

let minValue;
let maxValue;
export class PriceFilter extends Component {

    filterByPrice = (event) => {
        let priceList = [];
        if (event.target.name === "minprice"
            && event.target.value !== 'Min') {
            minValue = event.target.value;
        }

        if (event.target.name === "maxprice"
            && event.target.value !== 'Min') {
            maxValue = event.target.value;
        }

        if (minValue !== undefined && maxValue !== undefined) {
            if (Number(minValue) < Number(maxValue)) {
                priceList.push({ 'minValue': minValue });
                priceList.push({ 'maxValue': maxValue });
                this.props.priceFilter(priceList);
            } else {
                alert(PRICE_FILTER_WARNING);
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
        const { filtersData } = this.props;
        return (
            <>
                <div className="filter-items price-discount-div">
                    Price
                        <div className="range-div">
                        <div className="dropdown-div">
                            {filtersData.length > 2 ?
                                <select id="minprice" name="minprice" onChange={this.filterByPrice}>
                                    {filtersData[2].values.map((itemPrice) => (
                                        <option key={itemPrice.key} value={itemPrice.key}>{itemPrice.displayValue}</option>
                                    ))}
                                </select>
                                : null}
                        </div>
                        <div className="dropdown-div">
                            {filtersData.length > 0 ?
                                <select id="maxprice" name="maxprice" onChange={this.filterByPrice}>
                                    {filtersData[2].values.map((itemPrice) => (
                                        <option key={itemPrice.key} value={itemPrice.key}>{itemPrice.displayValue}</option>
                                    ))}
                                </select>
                                : null}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filtersData: state.productReducer.filtersData,
        reset: state.productReducer.reset
    };
};

const mapDispatchToProps = dispatch => {
    return {
        priceFilter: (priceList) => dispatch(filterByPrice(priceList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceFilter)
