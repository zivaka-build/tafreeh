import React from 'react';
import MiniProduct from '../product/product.small';
import "./bestseller.css";
export default function BestSeller(props) {
    return (
        <section className="best-sellers pt-60 pb-60 pb-lg-30 pb-md-30 pb-sm-30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="best-sellers-banner">
                            <img src={props.product_image} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="best-sellers-content pt-md-60 pt-sm-60">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title section-title__2">
                                        <h2>best sellers</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    {
                                        props.products && props.products.length?
                                        props.products.map((product,index)=>{
                                            return(
                                                <MiniProduct
                                                    key={index}
                                                    product={product}
                                                />
                                            );
                                        })
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}