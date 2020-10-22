import React from 'react';
export default function FooterMain(props) {
    return (
        <div className="footer-main-area">
            <div className="container">
                <div className="footer-main-inner bdr-top pt-56 pb-60 pb-md-20 pb-sm-20">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <div className="footer-widget-title">
                                    <h4>contact info</h4>
                                </div>
                                <div className="footer-widget-body">
                                    <ul className="location-wrap">
                                        <li>
                                            <h6 className="title">location:</h6>
                                            <p>110-114 W George St, City Centre,<br />Glasgow G2 1NF, USA</p>
                                        </li>
                                        <li>
                                            <h6 className="title">call us now:</h6>
                                            <p>+01-23456789<br />+01-23456789</p>
                                        </li>
                                        <li>
                                            <h6 className="title">email:</h6>
                                            <p><a href="#">info@yourdomain.com</a><br /><a href="#">support@yourdomain.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6"></div>
                        <div className="col-lg-3 col-md-6"></div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <div className="footer-widget-title">
                                    <h4>newsletter</h4>
                                </div>
                                <div className="footer-widget-body">
                                    <div className="newsletter-desc">
                                        <p>Subscribe to the Kavir mailing list to receive updates on new arrivals,
                                            special offers and other discount information.</p>
                                        <form id="mc-form">
                                            <input required name="email" placeholder="Your email address"/>
                                            <button><i className="ion-paper-airplane"></i>subscribe</button>
                                        </form>
                                        {/* <!-- mailchimp-alerts Start --> */}
                                        <div className="mailchimp-alerts">
                                            <div className="mailchimp-submitting"></div>
                                            {/* <!-- mailchimp-submitting end --> */}
                                            <div className="mailchimp-success"></div>
                                            {/* <!-- mailchimp-success end --> */}
                                            <div className="mailchimp-error"></div>
                                            {/* <!-- mailchimp-error end --> */}
                                        </div>
                                        {/* <!-- mailchimp-alerts end --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}