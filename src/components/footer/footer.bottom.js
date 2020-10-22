import React from 'react';
export default function FooterBottom(){
    return(
        <div className="footer-bootom bg-gray pt-20 pb-20">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="copyright-text text-center text-md-left">
                            <p>Copyright {new Date().getFullYear()} <a href="#">Tafreeh</a>. All Rights Reserved | Powered by <a href="http://www.zivaka.com/">ZiVAKA</a></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="payment-method text-md-right text-center">
                            <img src="assets/images/img-payment.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}