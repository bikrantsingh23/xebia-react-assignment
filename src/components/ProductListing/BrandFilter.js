import React, { Component } from 'react'
import { connect } from 'react-redux';
import { filterByBrand } from '../../actions';

export class BrandFilter extends Component {

    //Get the list of selected brand to filter product
    filterByBrand = (event) => {
        let selectedBrands = [];
        const brandDiv = document.getElementById("brandDiv");
        const allChecks = brandDiv.getElementsByTagName("input");
        for (var i = 0; i < allChecks.length; i++) {
            if (allChecks[i].checked) {
                selectedBrands.push(allChecks[i].value);
            }
        }
        this.props.brandFilter(selectedBrands);
    }

    render() {
        const { filtersData } = this.props;
        return (
            <>
                <div className="filter-items">
                    Brand
                        <div id="brandDiv" className="color-brand-div">
                        {filtersData.length > 0 ?
                            <>
                                {filtersData[0].values.map((itemBrand, index) => (
                                    <div className="checkbox-item" key={`${index + 1}`}>
                                        <input type="checkbox" id={itemBrand.value}
                                            name={itemBrand.value} value={itemBrand.value}
                                            onChange={this.filterByBrand} />
                                        <label htmlFor={itemBrand.value}>{itemBrand.title}</label>
                                    </div>
                                ))}
                            </>
                            : null}
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

const mapDispatchToProps = dispatch => {
    return {
        brandFilter: (brandList) => dispatch(filterByBrand(brandList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandFilter)
