import React, { Component } from 'react'
import { connect } from 'react-redux';

export class PriceFilter extends Component {
    render() {
        const { filtersData } = this.props;
        return (
            <>
                <div className="filter-items price-discount-div">
                    Price
                        <div className="range-div">
                        <div className="dropdown-div">
                            {filtersData.length > 2 ?
                                <select id="minprice" name="minprice">
                                    {filtersData[2].values.map((itemPrice) => (
                                        <option key={itemPrice.key} value={itemPrice.key}>{itemPrice.displayValue}</option>
                                    ))}
                                </select>
                                : null}
                        </div>
                        <div className="dropdown-div">
                            {filtersData.length > 0 ?
                                <select id="maxprice" name="maxprice">
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
        filtersData: state.productReducer.filtersData
    };
};

export default connect(mapStateToProps)(PriceFilter)
