import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import SrollTop from './components/ScrollToTop/scroll.top';
import Footer from './components/footer/footer';
import HomePage from './components/pages/home/home';
import Profile from './components/pages/profile/profile';
import Cart from './components/pages/cart/cart';
import UserLoginRegister from './components/pages/user-login-register/user-login-register';
import ProductDetails from './components/pages/productDetails/product.details';
import AboutUs from './components/pages/about/about.us';
import Shop from './components/pages/shop/shop';
import requireAuth from './common/hoc/reqAuth';
import requireNoAuth from './common/hoc/reqNoAuth';
import Backdrop from './components/loaders/backdrop/backdrop';
import SendPasswordLink from './components/auth/forgotPassword/forgotPassword';
import ResetPassword from './components/auth/resetPassword/resetPass';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log("window", window);
    return (
      <div className="App">
        <Backdrop />
        <Router>

          <SrollTop />
          {
            this.props.header ?
              <Header />
              : null
          }

          {this.props.isAuthenticated && (
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/profile" component={requireAuth(Profile)} />
              <Route path="/cart" component={Cart} />
              <Route path="/product_details" component={ProductDetails} />
              <Route path="/about" component={AboutUs} />
              <Route path="/shop" component={Shop} />
              <Route path="/login-register" component={requireNoAuth(UserLoginRegister)} />
              <Route path="*" component={() => { return (<h1>Not found</h1>) }} />
            </Switch>
          )
          }
          {
            !this.props.isAuthenticated && (
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/cart" component={Cart} />
                <Route path="/login-register" component={UserLoginRegister} />
                <Route path="/forgot_pwd" component={SendPasswordLink} />
                <Route path="/reset_pwd" component={ResetPassword} />
                <Route path="/product_details" component={ProductDetails} />
                <Route path="/about" component={AboutUs} />
                <Route path="/shop" component={Shop} />
                <Route
                  path="*"
                  component={() => {
                    return <Redirect to="login-register" />;
                  }}
                />
              </Switch>
            )
          }
          <Footer />
        </Router>
      </div>
    );
  }

}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.user && state.user.isAuthenticated ? true : false,
    header: state.layout && state.layout.header_visible ? true : false,
  }
}
export default connect(mapStateToProps)(App);
