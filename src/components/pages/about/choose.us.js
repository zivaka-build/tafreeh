import React from 'react';
import "./about.css";
export function ChooseUs() {
    return (
        <div className="choosing-area pt-60 pb-56 pb-md-24 pb-sm-24">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2>why choose us</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-choose-item text-center mb-md-30 mb-sm-30">
                            <i className="fa fa-globe"></i>
                            <h4>free shipping</h4>
                            <p>Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-choose-item text-center mb-md-30 mb-sm-30">
                            <i className="fa fa-plane"></i>
                            <h4>fast delivery</h4>
                            <p>Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-choose-item text-center mb-md-30 mb-sm-30">
                            <i className="fa fa-comments"></i>
                            <h4>customers support</h4>
                            <p>Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}