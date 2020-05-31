import React, { Component } from 'react'
import { ReactComponent as AddIcon } from '../../images/add.svg';
import { callProductService, addToCart } from '../../actions';
import { connect } from 'react-redux';

export class Catelog extends Component {

    componentDidMount() {
        this.props.getProducts("");//Call product service when page load
    }

    //Add items to cart
    addToCart = (id) => {
        let arr = [];
        if (this.props.cartItems === "") {
            arr.push(id);
        } else {
            arr = JSON.parse(this.props.cartItems);
            arr.push(id);
        }
        this.props.addToCart(JSON.stringify(arr));
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
                                            <img className="pimage" src={product.image} alt={product.brand} />
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
                                                    <div className="add-button-div" onClick={() => this.addToCart(product.id)}>
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
        cartItems: state.productReducer.cartItems,
        errMsg: state.productReducer.errMsg
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: (title) => dispatch(callProductService(title)),
        addToCart: (cartArr) => dispatch(addToCart(cartArr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catelog)
