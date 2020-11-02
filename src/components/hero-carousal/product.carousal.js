import React from 'react';
import "./carousal.css";
class ProductCarousal extends React.Component {
    componentDidMount() {
        // prodct details slider active
	window.$('.product-large-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: true,
		asNavFor: '.pro-nav',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
	});


	// product details slider nav active
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
                <div className="product-large-slider img-zoom mb-20 slider-arrow-style slider-arrow-style__style-2">
                    <div className="pro-large-img">
                        <img src="assets/images/product-product-details-img1.png" alt="" width="60%" /></div>
                    <div className="pro-large-img">
                        <img src="assets/images/product-product-details-img2.png" alt="" width="60%" /></div>
                    <div className="pro-large-img">
                        <img src="assets/images/product-product-details-img3.png" alt="" width="60%" /></div>
                    <div className="pro-large-img">
                        <img src="assets/images/product-product-details-img4.png" alt="" width="60%" /></div>
                    <div className="pro-large-img">
                        <img src="assets/images/product-product-details-img5.png" alt="" width="60%" /></div>
                </div>
                <div className="pro-nav slick-padding_2 slider-arrow-style slider-arrow-style__style-2">
                    <div className="pro-nav-thumb"><img src="assets/images/product-product-details-img1.png" alt="" /></div>
                    <div className="pro-nav-thumb"><img src="assets/images/product-product-details-img2.png" alt="" /></div>
                    <div className="pro-nav-thumb"><img src="assets/images/product-product-details-img3.png" alt="" /></div>
                    <div className="pro-nav-thumb"><img src="assets/images/product-product-details-img4.png" alt="" /></div>
                    <div className="pro-nav-thumb"><img src="assets/images/product-product-details-img5.png" alt="" /></div>
                </div>
            </>

        )
    }
}
export default ProductCarousal