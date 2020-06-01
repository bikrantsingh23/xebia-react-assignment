import React, { Component } from 'react'
import { ReactComponent as ResetIcon } from '../../images/reset.svg';
import { connect } from 'react-redux';
import { callFilterService, filterReset } from '../../actions';
import ColorFilter from './ColorFilter';
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import DiscountFilter from './DiscountFilter';

export class FilterBar extends Component {

    //Load filter data on page load
    componentDidMount() {
        this.props.getFilters();
    }

    resetFilter = () => {
        const filterOptionDiv = document.getElementById("filterOptionDiv");
        const allChecks = filterOptionDiv.getElementsByTagName("input");

        if (allChecks !== undefined) {
            for (var i = 0; i < allChecks.length; i++) {
                allChecks[i].checked = false;
            }
        }

        document.getElementById("minprice").selectedIndex = "0";
        document.getElementById("minprice").value = "Min";
        document.getElementById("maxprice").selectedIndex = "0";
        document.getElementById("maxprice").value = "Min";
        document.getElementById("mindiscount").selectedIndex = "0";
        document.getElementById("mindiscount").value = "Min";
        document.getElementById("maxdiscount").selectedIndex = "0";
        document.getElementById("maxdiscount").value = "Max";
        this.props.filerReset();
    }

    render() {
        const { filtersData } = this.props;
        return (
            <>
                <aside className="side-left">
                    <div className="filter-div-top">
                        <div className="filter-text">
                            Filter
                        </div>
                        <div className="reset-icon-div" onClick={this.resetFilter}>
                            <ResetIcon className="reset-icon" />
                            Reset
                        </div>
                    </div>
                    <div id="filterOptionDiv" className="filter-div-bottom">
                        {filtersData.length > 0 ?
                            <>
                                <ColorFilter />
                                <BrandFilter />
                                <PriceFilter />
                                <DiscountFilter />
                            </>
                            : null}
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
        getFilters: () => dispatch(callFilterService()),
        filerReset: () => dispatch(filterReset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)
