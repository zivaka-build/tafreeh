import React from 'react';
import '../product.css';
import './product.description.css';
class ProductDescription extends React.Component {
    render() {
        let ratedItem=[];
        for(var i=1;i<=this.props.rating;i++){
            if(i===1)
                ratedItem.push(<span key={i}><i className="ion-android-star"></i></span>);
            else
                ratedItem.push(<span key={i} className="product-rate-star"><i className="ion-android-star"></i></span>);
        }
        for(var i=(this.props.rating+1);i<=5;i++)
        {
            if(i===1)
                ratedItem.push(<span key={i}><i className="ion-android-star unrated-star"></i></span>);
            else
                ratedItem.push(<span key={i} className="product-rate-star"><i className="ion-android-star unrated-star"></i></span>);
        }
        return (
            <div className="product-details-des">
                <div className="product-content-list">
                    <div className="ratings">
                        {
                            ratedItem
                        }
                    </div>
                    <div className="product-name">
                        <h4><a href="product-details.html">Condimentum organic Tea</a></h4>
                    </div>
                    <div className="price-box">
                        <span className="regular-price">$160.00</span>
                        <span className="old-price"><del>$130.00</del></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                    tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus
                    quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu,
                                    suscipit id nulla.</p>
                    <div className="action-link mb-20">
                        <a href="#" data-toggle="tooltip" title="Add to cart" className="add-to-cart">add to
                                        cart</a>
                        {/* <a href="#" data-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline"></i></a>
                        <a href="#" data-toggle="tooltip" title="Compare"><i className="ion-ios-shuffle"></i></a> */}
                    </div>
                    <div className="quantity mb-20">
                        <h5>Quantity :</h5>
                        <div className="pro-qty">
                            <span className="dec qtybtn">-</span>
                            <input type="text" defaultValue="1" />
                            <span className="inc qtybtn">+</span>
                        </div>
                    </div>
                    <div className="availability mb-20">
                        <h5>Availability:</h5>
                        <span>10 in stock</span>
                    </div>
                    <div className="share-icon">
                        <h5>share:</h5>
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-pinterest"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductDescription;