import React, { Component } from 'react'
import { ReactComponent as ResetIcon } from '../../images/reset.svg';
import { connect } from 'react-redux';
import { callFilterService } from '../../actions';

export class FilterBar extends Component {

    componentDidMount() {
        this.props.getFilters();
    }

    render() {
        //const { filtersData } = this.props;
        return (
            <>
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
                                <div className="checkbox-item">
                                    <input type="checkbox" id="fruit1" name="fruit" value="Apple" />
                                    <label htmlFor="fruit1">Apple</label>
                                </div>
                            </div>
                        </div>
                        <div className="filter-items">
                            Brand
                                <div className="color-brand-div">
                                <div className="checkbox-item">
                                    <input type="checkbox" id="fruit1" name="fruit" value="Apple" />
                                    <label htmlFor="fruit1">Apple</label>
                                </div>
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
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filtersData: state.productReducer.filtersData,
        errMsg: state.productReducer.errMsg
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFilters: () => dispatch(callFilterService())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)
