import React from 'react';
import "./services.css";
export default function Services(){
    return(
        <section className="service-features pt-30">
            <div className="container">
                <div className="service-features-inner theme-color">
                    <div className="single-features-item">
                        <div className="features-icon">
                            <i className="ion-paper-airplane"></i>
                        </div>
                        <div className="features-content">
                            <h5>Free Shipping</h5>
                            <p>Free delivery on all orders over $99</p>
                        </div>
                    </div>
                    <div className="single-features-item">
                        <div className="features-icon">
                            <i className="ion-social-usd"></i>
                        </div>
                        <div className="features-content">
                            <h5>Free Shipping</h5>
                            <p>Free delivery on all orders over $99</p>
                        </div>
                    </div>
                    <div className="single-features-item">
                        <div className="features-icon">
                            <i className="ion-help-buoy"></i>
                        </div>
                        <div className="features-content">
                            <h5>Free Shipping</h5>
                            <p>Free delivery on all orders over $99</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}