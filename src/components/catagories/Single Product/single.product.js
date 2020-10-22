import React from 'react';
export default function SingleProduct(props) {
    return (
        <div className="category-single-item mb-md-30 mb-sm-30">
            <div className={props.background_color + " category-item-inner text-center"}>
                <div className="category-content">
                    <h2><a href="product-details.html">{props.product_name}</a></h2>
                    <p>{props.product_qty} products</p>
                </div>
                <div className="category-thumb">
                    <a href="product-details.html">
                        <img src={props.product_image} alt="" width="60%" />
                    </a>
                </div>
            </div>
        </div>
    );
}