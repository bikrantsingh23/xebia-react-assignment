import React, { Component } from 'react'
import { ReactComponent as ResetIcon } from '../../images/reset.svg';
import { connect } from 'react-redux';
import { callFilterService } from '../../actions';
import ColorFilter from './ColorFilter';
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import DiscountFilter from './DiscountFilter';

export class FilterBar extends Component {

    componentDidMount() {
        this.props.getFilters();
    }

    render() {
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
                        <ColorFilter />
                        <BrandFilter />
                        <PriceFilter />
                        <DiscountFilter />
                    </div>
                </aside>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filtersData: state.productReducer.filtersData,
        minDiscount: state.productReducer.minDiscount,
        maxDiscount: state.productReducer.maxDiscount,
        errMsg: state.productReducer.errMsg
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFilters: () => dispatch(callFilterService())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)
