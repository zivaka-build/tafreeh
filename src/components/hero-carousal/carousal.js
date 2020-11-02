import React from 'react';
import "./carousal.css";
class Carousal extends React.Component {
    componentDidMount() {

        window.$('.hero-slider-active').slick({
            autoplay: false,
            fade: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }]
        });
        
    }
    componentWillReceiveProps(nextProps){
        window.$(".hero-slider-active").slick('unslick');
        if(nextProps.items && nextProps.items.length)
        {
            
            setTimeout(
                ()=>{
                    window.$('.hero-slider-active').slick({
                        autoplay: false,
                        fade: true,
                        arrows: true,
                        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
                        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
                        responsive: [{
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                            }
                        }]
                    });
                    
                },1
            )
            
        }
       
    }

    render() {
        return (
            <section className="hero-slider-area">
                <div className="hero-slider-active slider-arrow-style">
                    {
                        this.props.items && this.props.items.length ?
                            this.props.items.map((item, index) => {
                                return (
                                    <div key={index} className="single-slider hero-bg hero-bg__1 d-flex align-items-center">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="content-inner">
                                                        <div className="slider-content">
                                                            <h1>{item.title}</h1>
                                                            <p>We supply highly quality, premium organic products</p>
                                                            <a href="shop.html" className="btn">shop now</a>
                                                        </div>
                                                        <div className="slider-img">
                                                            <img src={item.url} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            null
                    }

                </div>
            </section>

        )
    }
}
export default Carousal;