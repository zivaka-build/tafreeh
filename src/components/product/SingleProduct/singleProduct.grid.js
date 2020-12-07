import React from 'react';
import { Link } from 'react-router-dom';
export default function SingleProductGrid(props) {
    console.log("pdata",props);
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
        <div className="product-item mb-50">
            <div className="product-thumb">
                <Link to={`product_details?pid=${props.data.productID}`}>
                    <img src={props.data.thumbnail} alt="" width="60%" />
                </Link>
                <div className="quick-view-link">
                    <Link to={`product_details?pid=${props.data.productID}`} > <span data-toggle="tooltip" title="Quick view"><i className="ion-ios-eye-outline"></i></span>
                    </Link>
                </div>
            </div>
            <div className="product-content text-center">
                <div className="ratings">
                    {ratedItem}
                </div>
                <div className="product-name">
                    <h4 className="h5">
                        <Link to={`product_details?pid=${props.data.productID}`}>{props.data.pname}</Link>
                    </h4>
                </div>
                <div className="price-box">
                    <span className="regular-price">${props.data.price}</span>
                    {props.data.oprice?<span className="old-price"><del>{props.data.oprice}</del></span>:null}
                </div>
                <div className="product-action-link">
                    {/* <a href="#" data-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline"></i></a> */}
                    <a href="#" data-toggle="tooltip" title="Add to cart"><i className="ion-bag"></i></a>
                    {/* <a href="#" data-toggle="tooltip" title="Compare"><i className="ion-ios-shuffle"></i></a> */}
                </div>
            </div>
        </div>
    )
}