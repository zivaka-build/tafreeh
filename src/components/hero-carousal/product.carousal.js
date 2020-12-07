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
    componentWillReceiveProps(nextProps){
        window.$(".product-large-slider").slick('unslick');
        window.$(".pro-nav").slick('unslick');
        if(nextProps.img && nextProps.img.length)
        {
            setTimeout(
                ()=>{
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
                        slidesToShow: nextProps.img.length>3?3:nextProps.img.length-1,
                        slidesToScroll: 1,
                        asNavFor: '.product-large-slider',
                        centerMode: true,
                        arrows: true,
                        centerPadding: 0,
                        focusOnSelect: true,
                        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
                        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
                    });
                    
                },1
            )
            
        }
    }
    render() {
        console.log(this.props);
        return (
            <>
                <div className="product-large-slider img-zoom mb-20 slider-arrow-style slider-arrow-style__style-2">
                    {
                        this.props.img && this.props.img.length?
                        this.props.img.map((el,index)=>{
                            return(
                                <div key={index} className="pro-large-img">
                                    <img src={el} alt="" width="60%" />
                                </div>
                            )
                        })
                        :
                        null
                    }
                    
                </div>
                <div className="pro-nav slick-padding_2 slider-arrow-style slider-arrow-style__style-2">
                    {
                        this.props.img && this.props.img.length?
                        this.props.img.map((el,index)=>{
                            return(
                                <div key={index} className="pro-nav-thumb"><img src={el} alt="" /></div>
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