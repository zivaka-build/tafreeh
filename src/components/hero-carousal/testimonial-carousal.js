import React from 'react';
import './carousal.css';
class TestimonialCarousel extends React.Component {
    componentDidMount(){
        window.$('.testimonial-carousel-active').slick({
            autoplay: false,
            infinite: true,
            fade: false,
            dots: true,
            arrows: false,
            slidesToShow: 1
        });
    }
    render() {
        return (
            <div className="testimonial-carousel-active slick-dot-style">
                <div className="testimonial-item text-center">
                    <div className="testimonial-thumb">
                        <img src="assets/images/testimonial-team-member-1.jpg" alt="" />
                    </div>
                    <div className="testimonial-content">
                        <p>Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu aliquam eu,
                        luctus vehicula velit. Nam eget tortor ut felis fermentum sodales ac eu lacus.
                                        Etiam rhoncus congue arcu sed interdum. Cras dolor diam,</p>
                        <h3><a href="#">Elizabeth Taylor</a></h3>
                    </div>
                </div>
                {/* <!-- end single testimonial item --> */}
                <div className="testimonial-item text-center">
                    <div className="testimonial-thumb">
                        <img src="assets/images/testimonial-team-member-2.jpg" alt="" />
                    </div>
                    <div className="testimonial-content">
                        <p>Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu aliquam eu,
                        luctus vehicula velit. Nam eget tortor ut felis fermentum sodales ac eu lacus.
                                        Etiam rhoncus congue arcu sed interdum. Cras dolor diam,</p>
                        <h3><a href="#">jhon doe</a></h3>
                    </div>
                </div>
                {/* <!-- end single testimonial item --> */}
                <div className="testimonial-item text-center">
                    <div className="testimonial-thumb">
                        <img src="assets/images/testimonial-team-member-1.jpg" alt="" />
                    </div>
                    <div className="testimonial-content">
                        <p>Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu aliquam eu,
                        luctus vehicula velit. Nam eget tortor ut felis fermentum sodales ac eu lacus.
                                        Etiam rhoncus congue arcu sed interdum. Cras dolor diam,</p>
                        <h3><a href="#">erik jonson</a></h3>
                    </div>
                </div>
                {/* <!-- end single testimonial item --> */}
            </div>
        )
    }
}
export default TestimonialCarousel;