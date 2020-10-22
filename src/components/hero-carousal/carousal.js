import React from 'react';
import "./carousal.css";
class Carousal extends React.Component {
    componentDidMount()
    {
        
        window.$('.hero-slider-active').slick({
            autoplay: false,
            fade: true,
            arrows: true,
            prevArrow: '<button type="button" className="slick-prev"><i className="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" className="slick-next"><i className="fa fa-angle-right"></i></button>',
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }]
        });
    }
    componentDidUpdate(){
        // window.$('.hero-slider-active').slick({
        //     autoplay: false,
        //     fade: true,
        //     arrows: true,
        //     prevArrow: '<button type="button" className="slick-prev"><i className="fa fa-angle-left"></i></button>',
        //     nextArrow: '<button type="button" className="slick-next"><i className="fa fa-angle-right"></i></button>',
        //     responsive: [{
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //         }
        //     }]
        // });
    }
    render() {
        return (
            <section className="hero-slider-area">
            <div className="hero-slider-active slider-arrow-style">
                <div className="single-slider hero-bg hero-bg__1 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content-inner">
                                    <div className="slider-content">
                                        <h1>1tasty healthy <br/>we sell what's<br/>good for you </h1>
                                        <p>We supply highly quality, premium organic products</p>
                                        <a href="shop.html" className="btn">shop now</a>
                                    </div>
                                    <div className="slider-img">
                                        <img src="assets/images/slider-slide_2.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="single-slider hero-bg hero-bg__1 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content-inner">
                                    <div className="slider-content">
                                        <h1>Great offers<br/>on Tea <br/>and Tea </h1>
                                        <p>We supply highly quality, premium organic products</p>
                                        <a href="shop.html" className="btn">shop now</a>
                                    </div>
                                    <div className="slider-img">
                                        <img src="assets/images/slider-slide_1.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slider hero-bg hero-bg__1 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content-inner">
                                    <div className="slider-content">
                                        <h1>3tasty healthy <br/>we sell what's<br/>good for you </h1>
                                        <p>We supply highly quality, premium organic products</p>
                                        <a href="shop.html" className="btn">shop now</a>
                                    </div>
                                    <div className="slider-img">
                                        <img src="assets/images/slider-slide_2.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

        )
    }
}
export default Carousal;