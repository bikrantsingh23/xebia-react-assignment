import React, { Component } from 'react'
import { connect } from 'react-redux';

export class BrandFilter extends Component {
    render() {
        const { filtersData } = this.props;
        return (
            <>
                <div className="filter-items">
                    Brand
                        <div className="color-brand-div">
                        {filtersData.length > 0 ?
                            <>
                                {filtersData[0].values.map((itemBrand) => (
                                    <div className="checkbox-item" key={itemBrand.title}>
                                        <input type="checkbox" id={itemBrand.title} name={itemBrand.title} value={itemBrand.title} />
                                        <label htmlFor={itemBrand.title}>{itemBrand.title}</label>
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

export default connect(mapStateToProps)(BrandFilter)
