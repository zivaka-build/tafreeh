import React,{useEffect} from 'react';
import "./scroll.top.css";
export default function SrollTop(){
    useEffect(
        ()=>{
            window.$(window).on('scroll', function () {
                if (window.$(this).scrollTop() > 600) {
                    window.$('.scroll-top').removeClass('not-visible');
                } else {
                    window.$('.scroll-top').addClass('not-visible');
                }
            });
            window.$('.scroll-top').on('click', function (event) {
                window.$('html,body').animate({
                    scrollTop: 0
                }, 1000);
            });
        }
    )
    return(
        <div className="scroll-top not-visible">
            <i className="fa fa-angle-up"></i>
        </div>
    )
}