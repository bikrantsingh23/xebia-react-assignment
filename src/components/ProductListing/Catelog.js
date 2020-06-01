import React, { Component } from 'react'
import { ReactComponent as AddIcon } from '../../images/add.svg';
import { callProductService, addToCart } from '../../actions';
import { connect } from 'react-redux';

export class Catelog extends Component {

    //Call product service when page load
    componentDidMount() {
        this.props.getProducts("");
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
                                                    <p>{product.colour.title}</p>
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
                                                    {`Rs. ${product.price.final_price}`}
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

//Filter product
const filterRecord = (productData, ...filterConditions) => {
    return productData.filter((product) => {

        //Color Filter
        if (filterConditions[0].length > 0
            && filterConditions[0].indexOf(product.colour.title) < 0) {
            return false;
        }

        //Brand Filter
        if (filterConditions[1].length > 0
            && filterConditions[1].indexOf(product.brand) < 0) {
            return false;
        }

        //Price Filter
        if (filterConditions[2].length > 0
            && ((Number(product.price.final_price) < Number(filterConditions[2][0].minValue))
                || (Number(product.price.final_price) > Number(filterConditions[2][1].maxValue)))) {
            return false;
        }

        //Discount Filter
        if (filterConditions[3].length > 0
            && ((Number(product.discount) < Number(filterConditions[3][0].minValue))
                || (Number(product.discount) > Number(filterConditions[3][1].maxValue)))) {
            return false;
        }
        return true;
    });
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.productReducer.isLoading,
        cartItems: state.productReducer.cartItems,
        colorList: state.productReducer.colorList,
        brandList: state.productReducer.brandList,
        priceList: state.productReducer.priceList,
        discountList: state.productReducer.discountList,
        errMsg: state.productReducer.errMsg,
        productList: filterRecord(
            state.productReducer.productList,
            state.productReducer.colorList,
            state.productReducer.brandList,
            state.productReducer.priceList,
            state.productReducer.discountList
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: (title) => dispatch(callProductService(title)),
        addToCart: (cartArr) => dispatch(addToCart(cartArr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catelog)
