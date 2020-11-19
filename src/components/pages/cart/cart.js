import React from 'react';
import "./cart.css";
class Cart extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-10 col-11 mx-auto">
                        <div class="row mt-5 gx-3">
                            {/* <!-- left side div --> */}
                            <div class="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                                <div class="card p-4">
                                    <h2 class="py-4 font-weight-bold">Cart (2 items)</h2>
                                    <div class="row">
                                        {/* <!-- cart images div --> */}
                                        <div class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                                            <img src="assets/images/product-product-1.png" class="img-fluid" alt="cart img" />
                                        </div>




                                        {/* <!-- cart product details --> */}
                                        <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                                            <div class="row">
                                                {/* <!-- product name  --> */}
                                                <div class="col-12 card-title mt-3">
                                                    <h1 class="mb-4 product_name">Blue Zara Shirt</h1>

                                                </div>
                                            </div>
                                            <div className="row">
                                                {/* <!-- quantity inc dec --> */}
                                                
                                                <div class="col-12">
                                                    <div className="pro-quantity">
                                                        <div className="pro-qty">
                                                            <span className="dec qtybtn" >-</span>
                                                            <input type="text" readOnly value={15} />
                                                            <span className="inc qtybtn" >+</span>
                                                        </div>
                                                    </div>
                                                    <span className="available ml-5">(100 in stock)</span>
                                                </div>
                                            </div>
                                            {/* <!-- //remover move and price --> */}
                                            <div className="row mt-3">
                                                <div className="col-6">
                                                    <div className="price-money">
                                                        <h3>Price: <span>$4556</span></h3>
                                                    </div>   
                                                </div>
                                                <div className="col-6">
                                                    <div className="price-money">
                                                        <h3>Total: <span>$4556</span></h3>
                                                    </div>   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                {/* <!-- 2nd cart product --> */}
                                
                            </div>
                            {/* <!-- right side div --> */}
                            <div class="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                                <div class="right_side p-3 shadow bg-white">
                                    <h2 class="product_name mb-5">The Total Amount Of</h2>
                                    <div class="price_indiv d-flex justify-content-between">
                                        <p>Product amount</p>
                                        <p>$<span id="product_total_amt">0.00</span></p>
                                    </div>
                                    <div class="price_indiv d-flex justify-content-between">
                                        <p>Shipping Charge</p>
                                        <p>$<span id="shipping_charge">50.0</span></p>
                                    </div>
                                    <hr />
                                    <div class="total-amt d-flex justify-content-between font-weight-bold">
                                        <p>The total amount of (including VAT)</p>
                                        <p>$<span id="total_cart_amt">0.00</span></p>
                                    </div>
                                    <button class="btn btn-primary text-uppercase">Checkout</button>
                                </div>
                                {/* <!-- discount code part --> */}
                                <div class="discount_code mt-3 shadow">
                                    <div class="card">
                                        <div class="card-body">
                                            <a class="d-flex justify-content-between" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                Add a discount code (optional)
<span><i class="fa fa-chevron-down pt-1"></i></span>
                                            </a>
                                            <div class="collapse" id="collapseExample">
                                                <div class="mt-3">
                                                    <input type="text" name="" id="discount_code1" class="form-control font-weight-bold" placeholder="Enter the discount code" />
                                                    <small id="error_trw" class="text-dark mt-3">code is thapa</small>
                                                </div>
                                                <button class="btn btn-primary btn-sm mt-3" onclick="discount_code()">Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                {/* <!-- discount code ends --> */}
                                <div class="mt-3 shadow p-3 bg-white">
                                    <div class="pt-4">
                                        <h5 class="mb-4">Expected delivery date</h5>
                                        <p>July 27th 2020 - July 29th 2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;