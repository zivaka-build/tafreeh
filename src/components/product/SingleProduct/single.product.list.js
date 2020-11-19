import React from 'react';
import { Link } from 'react-router-dom';
export default function SingleProductList(props) {
    let ratedItem=[];
        for(var i=1;i<=props.data.rating;i++){
            if(i===1)
                ratedItem.push(<span key={i}><i className="ion-android-star"></i></span>);
            else
                ratedItem.push(<span key={i} className="product-rate-star"><i className="ion-android-star"></i></span>);
        }
        for(i=(props.data.rating+1);i<=5;i++)
        {
            if(i===1)
                ratedItem.push(<span key={i}><i className="ion-android-star unrated-star"></i></span>);
            else
                ratedItem.push(<span key={i} className="product-rate-star"><i className="ion-android-star unrated-star"></i></span>);
        }
    return (
        <div className="product-list-item mb-30">
            <div className="product-thumb">
                <Link to={`product_details`}>
                    <img src={props.data.image} alt="" width="60%" /></Link>
                <div className="quick-view-link">
                    <Link to={`product_details`}><span data-toggle="tooltip" title="Quick view"><i className="ion-ios-eye-outline"></i></span>
                    </Link>
                </div>
            </div>
            <div className="product-content-list">
                <div className="ratings">
                    {ratedItem}
                </div>
                <div className="product-name">
                    <h4><Link to={`product_details`}>{props.data.name}</Link></h4>
                </div>
                <div className="price-box">
                    <span className="regular-price">${props.data.regular_price}</span>
                    <span className="old-price"><del>${props.data.regular_price}</del></span>
                </div>
                <p>{props.data.details}</p>
                <div className="action-link">
                    <a href="#" data-toggle="tooltip" title="Add to cart" className="add-to-cart">add
                                                    to cart</a>
                    {/* <a href="#" data-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline"></i></a>
                    <a href="#" data-toggle="tooltip" title="Compare"><i className="ion-ios-shuffle"></i></a> */}
                </div>
            </div>
        </div>

    )
}