import React from 'react';
import { connect } from 'react-redux';
import './header.css'
import MainMenu from './header.menu';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { ACTIONS } from '../../common/config/actions';
import Cookies from 'js-cookie';
import { STORAGE } from '../../common/constants/storageConstants';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: true }
    }
    componentDidMount() {
        window.$(".mini-cart-wrap button").on("click", function (event) {
            event.stopPropagation();
            event.preventDefault();
            window.$(".cart-list").slideToggle();
        });
        window.$('.dropdown').on('show.bs.dropdown', function (e) {
            window.$(this).find('.dropdown-menu').first().stop(true, true).slideDown(500);
        });

        window.$('.dropdown').on('hide.bs.dropdown', function (e) {
            window.$(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
        });
    }

    logout=()=>{
        Cookies.remove(STORAGE.AUTH_TOKEN);
        Cookies.remove(STORAGE.CURRENT_USER_EMAIL);
        this.props.dispatch({
            type:ACTIONS.LOGOUT
        });
        
        window.location.href=`${window.location.origin}/login-register`;
    }
    render() {
        return (
            <header className="header-area">
                <div className="header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="logo">
                                    <Link to="/">
                                        <h2>Tafreeh</h2>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="header-settings-area">
                                    <div className="header-top-left">
                                        <nav>
                                            <ul className="d-flex justify-content-center">
                                                <li>
                                                    <div className="dropdown header-top-dropdown">
                                                        <a href="#!" className="dropdown-toggle" id="myaccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >
                                                            {this.props.isAuthenticated?`Hello ${this.props.user && (this.props.user.firstname)}`:'my account'}
                                                            <i className="fa fa-angle-down"></i>
                                                        </a>
                                                        <div className="dropdown-menu" aria-labelledby="myaccount">
                                                            {
                                                                this.props.isAuthenticated?
                                                                <>
                                                                    <Link className="dropdown-item" to="/profile">my profile</Link>
                                                                    <a className="dropdown-item" style={{cursor:'pointer'}} href="#" onClick={this.logout}>log out</a>
                                                                </>
                                                                :
                                                                <>
                                                                    <Link className="dropdown-item" to="login-register" style={{fontSize:'13px'}}>login/register</Link>
                                                                    {/* <Link className="dropdown-item" to="login-register">register</Link> */}
                                                                </>
                                                            }    
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-top-right">
                                        <div className="header-search-box">
                                            <form>
                                                <input type="text" placeholder="Search Here" />
                                                <button><i className="ion-ios-search-strong"></i></button>
                                            </form>
                                        </div>
                                        <div className="mini-cart-wrap">
                                            <button><i className="ion-bag"></i>
                                                <span className="notification">2</span>
                                            </button>
                                            <ul className="cart-list"><li>
                                                <div className="cart-img">
                                                    <a href="product-details.html"><img src="assets/images/cart-cart-1.png" alt="" /></a>
                                                </div>
                                                <div className="cart-info">
                                                    <h4><a href="product-details.html">simple product</a></h4>
                                                    <span className="cart-qty">Qty: 1</span>
                                                    <span>$60.00</span>
                                                </div>
                                                <div className="del-icon">
                                                    <i className="fa fa-times"></i>
                                                </div>
                                            </li>
                                                <li>
                                                    <div className="cart-img">
                                                        <a href="product-details.html"><img src="assets/images/cart-cart-2.png" alt="" /></a>
                                                    </div>
                                                    <div className="cart-info">
                                                        <h4><a href="product-details.html">virtual product</a></h4>
                                                        <span className="cart-qty">Qty: 2</span>
                                                        <span>$100.00</span>
                                                    </div>
                                                    <div className="del-icon">
                                                        <i className="fa fa-times"></i>
                                                    </div>
                                                </li>
                                                <li className="mini-cart-price">
                                                    <span className="subtotal">subtotal : </span>
                                                    <span className="subtotal-price ml-auto">$110.00</span>
                                                </li>
                                                <li className="checkout-btn">
                                                    <Link onClick={this.slideUp} to="/cart">View Cart</Link>
                                                </li>
                                                <li className="checkout-btn">
                                                    <a href="checkout.html">checkout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MainMenu/>                
            </header>
        )
    }

}
const mapStateToProps = state => {
    return {
        ...state,
        isAuthenticated:state.user.isAuthenticated,
        user: state.user&& state.user.user?state.user.user:null,
    };
};
export default connect(mapStateToProps)(withRouter(Header));