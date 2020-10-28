import React from 'react';
import "./banner.stats.css";
export default function BannerStatistics(props){
    return(
        <div className="banner-statistics">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-container mb-sm-30">
                            <a href="product-details.html">
                                <img src="assets/images/banner-banner-1.jpg" alt="banner_image"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-container mb-sm-30">
                            <a href="product-details.html">
                                <img src="assets/images/banner-banner-2.jpg" alt="banner_image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}