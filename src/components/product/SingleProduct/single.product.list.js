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
                <Link to={`product_details?pid=${props.data.productID}`}>
                    <img src={props.data.thumbnail} alt="" width="60%" />
                </Link>
                <div className="quick-view-link">
                    <Link to={`product_details?pid=${props.data.productID}`}><span data-toggle="tooltip" title="Quick view"><i className="ion-ios-eye-outline"></i></span>
                    </Link>
                </div>
            </div>
            <div className="product-content-list">
                <div className="ratings">
                    {ratedItem}
                </div>
                <div className="product-name">
                    <h4><Link to={`product_details?pid=${props.data.productID}`}>{props.data.pname}</Link></h4>
                </div>
                <div className="price-box">
                    <span className="regular-price">${props.data.price}</span>
                    {props.data.oprice ?
                        <span className="old-price"><del>${props.data.oprice}</del></span>:null
                    }
                </div>
                <p>{props.data.desc}</p>
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