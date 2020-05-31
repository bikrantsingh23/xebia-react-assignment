import React, { Component } from 'react'
import { ReactComponent as AddIcon } from '../../images/add.svg';
import { callProductService } from '../../actions';
import { connect } from 'react-redux';

export class Catelog extends Component {

    componentDidMount() {
        this.props.getProducts("");
    }

    render() {
        const { productList, isLoading } = this.props;

        return (
            <>
                <aside className="side-right">
                    <div className="grid-column">
                        {(isLoading === false && productList.length > 0) ?
                            <>
                                {productList.map((product) => (
                                    <div className="cateloge-main" key={product.id}>
                                        <div className="pimage-div">
                                            <img className="pimage" src={product.image} alt="" />
                                            {product.discount > 0 ?
                                                <div className="product-discount">
                                                    {`${product.discount}%`}
                                                </div>
                                                : null}
                                        </div>
                                        <div className="details-div">
                                            <div className="ditail-inner">
                                                <div className="pname-div">
                                                    {product.title}
                                                </div>
                                                <div className="pcolor-div">
                                                    <p>Color</p>
                                                    <div style={{ backgroundColor: `${product.colour.color}` }} className="color-div"></div>
                                                </div>
                                            </div>
                                            <div className="ditail-inner">
                                                <div className="pbrand-div">
                                                    {product.brand}
                                                </div>
                                                <div className="padd-div">
                                                    <div className="add-button-div">
                                                        <AddIcon className="add-icon" />
                                                        <p>Add</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ditail-inner">
                                                <div className="price-div">
                                                    {`${product.price.final_price}$`}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                            :
                            <>
                                {(isLoading === true) ?
                                    'Product Loading...'
                                    : null}
                            </>}
                    </div>
                </aside>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.productReducer.productList,
        isLoading: state.productReducer.isLoading,
        errMsg: state.productReducer.errMsg
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: (title) => dispatch(callProductService(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catelog)
