import React, { Component } from 'react'
import { connect } from 'react-redux';
import { filterByColor } from '../../actions';

export class ColorFilter extends Component {

    //Get the list of selected color to filter product
    filterByColor = (event) => {
        let selectedColors = [];
        const colorDiv = document.getElementById("colorDiv");
        const allChecks = colorDiv.getElementsByTagName("input");
        for (var i = 0; i < allChecks.length; i++) {
            if (allChecks[i].checked) {
                selectedColors.push(allChecks[i].value);
            }
        }
        this.props.colorFilter(selectedColors);
    }

    render() {
        const { filtersData } = this.props;
        return (
            <>
                <div className="filter-items">
                    Color
                        <div id="colorDiv" className="color-brand-div">
                        {filtersData.length > 1 ?
                            <>
                                {filtersData[1].values.map((itemColor) => (
                                    <div className="checkbox-item" key={itemColor.title}>
                                        <input type="checkbox" id={itemColor.title} onChange={this.filterByColor}
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

const mapDispatchToProps = dispatch => {
    return {
        colorFilter: (colorList) => dispatch(filterByColor(colorList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorFilter)
