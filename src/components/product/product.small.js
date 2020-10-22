import React from 'react';
import "./product.css";
export default function MiniProduct(props) {
    return (
        <div className="single-item mb-30">
            <div className="product-thumb">
                <a href="product-details.html">
                    <img src={props.product.img} alt="" /></a>
                <div className="quick-view-link">
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" title="Quick view"><i className="ion-ios-eye-outline"></i></span>
                    </a>
                </div>
            </div>
            <div className="product-description">
                <div className="tag-cate">
                    <a href="product-details.html">{props.product.tag}</a>
                </div>
                <div className="product-name">
                    <h4 className="h5">
                        <a href="product-details.html">{props.product.name}</a>
                    </h4>
                </div>
                <div className="price-box">
                    <span className="regular-price">${props.product.price}</span>
                    {
                        props.product.old_price?
                        <span className="old-price"><del>${props.product.old_price}</del></span>
                        :
                        null
                    }
                </div>
            </div>
        </div>

    )
}