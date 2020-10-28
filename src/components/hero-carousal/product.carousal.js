import React from 'react';
import "./carousal.css";
class ProductCarousal extends React.Component {
    componentDidMount() {
        window.$('.product-large-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: true,
            asNavFor: '.pro-nav',
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        });
        window.$('.pro-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product-large-slider',
            centerMode: true,
            arrows: true,
            centerPadding: 0,
            focusOnSelect: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
        });
    }
    render() {
        return (
            <>
                <div className="product-large-slider mb-20 slider-arrow-style slider-arrow-style__style-2">
                    {
                        this.props.img&&this.props.img.length?this.props.img.map((img,index) => {
                            return (
                                <div key={index} className="pro-large-img">
                                    <img src={img.src_original} />
                                </div>
                            )
                        })
                        :
                        null
                    }

                </div>
                <div className="pro-nav slick-padding_2 slider-arrow-style slider-arrow-style__style-2">
                    {
                        this.props.img&&this.props.img.length?this.props.img.map((img,index) => {
                            return (
                                <div key={index} className="pro-nav-thumb">
                                    <img src={img.src_original} />
                                </div>
                            )
                        })
                        :
                        null
                    }
                </div>
            </>

        )
    }
}
export default ProductCarousal