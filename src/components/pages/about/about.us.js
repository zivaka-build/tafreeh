import React from 'react';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import Team from './team';
import "./about.css";
import TestimonialCarousel from '../../hero-carousal/testimonial-carousal';
import { ChooseUs } from './choose.us';
class AboutUs extends React.Component {
    render() {
        return (
            <main>
                <Breadcrumb
                    page_title="About"
                    items={[{ name: 'home', path: '/' }, { name: 'about us' }]}
                />
                <div className="about-us-wrapper pt-60 pb-60 pb-lg-56 pt-sm-58">
                    <div className="container">
                        <div className="row">
                            {/* <!-- About Text Start --> */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="about-text-wrap">
                                    <h2>About Tafreeh</h2>
                                    <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            {/* <!-- About Text End -->
                            <!-- About Image Start --> */}
                            <div className="col-xl-5 col-lg-6 ml-auto">
                                <div className="about-image-wrap">
                                    <img src="assets/images/about-about.png" alt="About" /></div>
                            </div>
                            {/* <!-- About Image End --> */}
                        </div>
                    </div>
                </div>
                <Team
                    title="Our Team"
                />
                <div class="testimonial-area pt-60 pb-88" style={{backgroundImage:'url("assets/images/testimonial-testimonials_bg.png")'}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="section-title text-center">
                                    <h2 class="text-333">testimonial</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <TestimonialCarousel />
                            </div>
                        </div>
                    </div>
                </div>
                <ChooseUs/>
            </main>
        )
    }
}
export default AboutUs;