import React,{useEffect} from 'react';
import { Link, NavLink} from 'react-router-dom';
import "../header/header.css";
export default function MainMenu(){
    useEffect(()=>{
        var $window = window.$(window);
        $window.on('scroll', function () {
            var scroll = $window.scrollTop();
            if (scroll < 300) {
                window.$(".sticky").removeClass("is-sticky");
            } else {
                window.$(".sticky").addClass("is-sticky");
            }
        });
        window.$('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991"
        });
    },[])
    return(
        <div className="main-menu-area sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="main-menu">
                            {/* <!-- main menu navbar start --> */}
                            <nav id="mobile-menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><NavLink to="/about">About Us</NavLink></li>
                                    <li><a href="shop.html">shop</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contact us.html">Contact</a></li>
                                </ul>
                            </nav>
                            {/* <!-- main menu navbar end --> */}
                        </div>
                    </div>
                    <div className="col-12 d-block d-lg-none">
                        <div className="mobile-menu"></div>
                    </div>
                </div>
            </div>
        </div>
        );
}