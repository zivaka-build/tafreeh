import React from 'react';
import SingleProductList from '../../../product/SingleProduct/single.product.list';
import SingleProductGrid from '../../../product/SingleProduct/singleProduct.grid';
import '../shop.css';
class ShopArea extends React.Component {
    constructor(props){
        super(props);
        this.state={view:'grid'}
    }
    
    render() {
        return (
            <div className="shop-product-wrapper">
                {/* <!-- shop product top wrap start --> */}
                <div className="shop-top-bar">
                    <div className="row">
                        <div className="col-xl-5 col-lg-4 col-md-3 order-2 order-md-1">
                            <div className="top-bar-left">
                                <div className="product-view-mode">
                                    <a className={`${this.state.view==='grid'?'active':''}`} href="javascript:void(0);" onClick={()=>{this.setState({view:'grid'})}}/*data-target="grid-view"*/>
                                        <i className="fa fa-th"></i>
                                    </a>
                                    <a href="javascript:void(0);" className={`${this.state.view!=='grid'?'active':''}`} onClick={()=>{this.setState({view:'list'})}}/*data-target="list-view"*/>
                                        <i className="fa fa-list"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8 col-md-9 order-1 order-md-2">
                            <div className="top-bar-right">
                                <div className="product-short">
                                    <p>Sort By : </p>
                                    <select className="nice-select" name="sortby">
                                        <option value="trending">Relevance</option>
                                        <option value="sales">Name (A - Z)</option>
                                        <option value="rating">Price (Low &gt; High)</option>
                                        <option value="date">Rating (Lowest)</option>
                                        <option value="price-asc">Blend (A - Z)</option>
                                    </select>
                                </div>
                                <div className="product-amount">
                                    <p>Showing 1&ndash;12 of 36 results</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- shop product top wrap start -->

                            <!-- product item list start --> */}
                <div className={`shop-product-wrap row ${this.state.view==='grid'?'grid-view':'list-view'}`}>
                    {
                        this.props.products && this.props.products.length ?
                            this.props.products.map((product, index) => {
                                return (
                                    <div key={index} className="col-lg-4 col-md-4 col-sm-6">
                                        {/* <!-- product grid item start --> */}
                                        <SingleProductGrid data={product} />
                                        {/* <!-- product grid item end -->
                                    <!-- product list item start --> */}
                                        <SingleProductList data={product} />
                                        {/* <!-- product list item start --> */}
                                    </div>
                                )

                            })
                            :
                            <div className="d-flex justify-content-center">
                                <p className="text-center">No Products available</p>
                            </div>
                    }

                </div>

            </div>
        )
    }
}
export default ShopArea;