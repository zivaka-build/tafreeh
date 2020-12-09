import React from 'react';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import ProductCarousal from '../../hero-carousal/product.carousal';
import ProductDescription from '../../product/productDescription/product.description';
import ProductReview from '../../product/productReview/product.review';
import { connect } from 'react-redux';
import { SAGA_ACTIONS } from '../../../common/config/actions';
const qs = require('query-string');
class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: {},qty:1 };
    }
    componentDidMount() {
        let t = qs.parse(this.props.history.location.search);
        return new Promise((resolve, reject) => {
            this.props.dispatch({
                type: SAGA_ACTIONS.PRODUCTS.GET_BY_PRODUCT_ID,
                payload: { pid: t.pid },
                callbackSuccess: resp => {
                    this.setState({ product: resp.data });
                    resolve(resp);
                },
                callbackError: err => {
                    console.log(err);
                    reject(err);
                }
            })

        })
    }
    incrementProductQuantity=()=>{
        console.log("fff");
        this.setState({qty:this.state.qty+1})
    }
    componentWillUnmount(){
        this.setState({product:{}})
    }
    render() {
        return (
            <main className="body-details">
                <Breadcrumb
                    page_title="Product Details"
                    items={[{ name: 'home', path: '/' }, { name: 'product details' }]}
                />
                <div className="product-details-wrapper pt-60 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <ProductCarousal
                                    img={this.state.product && this.state.product.productImage && this.state.product.productImage.length ? this.state.product.productImage : []}
                                />

                            </div>
                            <div className="col-lg-7 col-md-6">
                                <ProductDescription
                                    data={this.state.product}
                                    qty={this.state.qty}
                                    increment={()=>this.incrementProductQuantity()}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <ProductReview />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        )
    }
}
const mapStateToProps = state => {
    return { ...state }
}
export default connect(mapStateToProps)(ProductDetails);