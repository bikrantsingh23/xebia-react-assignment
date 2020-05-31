import React, { Component } from 'react'
import { connect } from 'react-redux';

export class ColorFilter extends Component {
    render() {
        const { filtersData } = this.props;
        return (
            <>
                <div className="filter-items">
                    Color
                        <div className="color-brand-div">
                        {filtersData.length > 1 ?
                            <>
                                {filtersData[1].values.map((itemColor) => (
                                    <div className="checkbox-item" key={itemColor.title}>
                                        <input type="checkbox" id={itemColor.title}
                                            name={itemColor.title} value={itemColor.title} />
                                        <label htmlFor={itemColor.title}>{itemColor.title}</label>
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

export default connect(mapStateToProps)(ColorFilter)
