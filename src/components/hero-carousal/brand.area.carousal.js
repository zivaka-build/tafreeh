import React,{useEffect} from 'react';
import "./carousal.css";
export default function BrandCarousal(){
    useEffect(
        ()=>{
            var brand = window.$('.brand-active');
	brand.slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		speed: 1000,
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToShow: 6,
		prevArrow: '<button type="button" className="slick-prev"><i className="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" className="slick-next"><i className="fa fa-angle-right"></i></button>',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					arrows: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});
        },[]
    )
    return(
        <div className="brand-area">
            <div className="container">
                <div className="brand-inner bdr-top pt-30 pb-30">
                    <div className="brand-active slick-padding">
                        <div className="brand-item">
                            <a href="#">
                                <img src="assets/images/brand-br1.png" alt="brand image"/>
                            </a>
                        </div>
                        <div className="brand-item">
                            <a href="#">
                                <img src="assets/images/brand-br2.png" alt="brand image"/>
                            </a>
                        </div>
                        <div className="brand-item">
                            <a href="#">
                                <img src="assets/images/brand-br3.png" alt="brand image"/>
                            </a>
                        </div>
                        <div className="brand-item">
                            <a href="#">
                                <img src="assets/images/brand-br4.png" alt="brand image"/>
                            </a>
                        </div>
                        <div className="brand-item">
                            <a href="#">
                                <img src="assets/images/brand-br5.png" alt="brand image"/>
                            </a>
                        </div>
                        <div className="brand-item">
                            <a href="#">
                                <img src="assets/images/brand-br6.png" alt="brand image"/>
                            </a>
                        </div>
                        <div className="brand-item">
                            <a href="#">
                                <img src="assets/images/brand-br3.png" alt="brand image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}