import React from 'react';
import Services from '../../service/services';
import SingleProduct from '../Single Product/single.product';
import "./popular.catagories.css";
export default function PopularCatagories(){
    return(
        <>
        <Services/>
        <section className="popular-category bg-gray mt-minus pt-60 pb-60 pb-md-30 pb-sm-30">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center pt-62">
                            <h2>Popular Categories</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <SingleProduct
                            product_name="Black Tea"
                            product_qty="5"
                            product_image="assets/images/category-cat-1.png"
                            background_color="color1"
                        />
                    </div> 
                    {/* <!-- end single item --> */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <SingleProduct
                            product_name="Green Tea"
                            product_qty="5"
                            product_image="assets/images/category-cat-2.png"
                            background_color="color2"
                        />
                    </div> 
                    {/* <!-- end single item --> */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <SingleProduct
                            product_name="White Tea"
                            product_qty="50"
                            product_image="assets/images/category-cat-3.png"
                            background_color="color3"
                        />
                    </div> 
                    {/* <!-- end single item --> */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <SingleProduct
                            product_name="Oolong Tea"
                            product_qty="5"
                            product_image="assets/images/category-cat-2.png"
                            background_color="color4"
                        />
                    </div>
                     {/* <!-- end single item --> */}
                </div>
            </div>
        </section>
        </>
    )
}