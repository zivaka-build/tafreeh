import React from 'react';
import './App.css';
import {connect} from 'react-redux';
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
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Backdrop/>
        <Router>
          
          <SrollTop />
          <Header />
          {this.props.isAuthenticated && (
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={requireAuth(Profile)} />
            <Route path="/cart" component={Cart}/>
            <Route path="/product_details" component={ProductDetails} />
            <Route path="/about" component={AboutUs} />
            <Route path="/shop" component={Shop} />
            <Route path="/login-register" component={requireNoAuth(UserLoginRegister)} />
          </Switch>
          )
        }
        {
          !this.props.isAuthenticated && (
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/cart" component={Cart}/>
            <Route path="/login-register" component={UserLoginRegister} />
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


        {/* <Breadcrumb 
      items={[{name:"home",path:"index.html"},{name:'about us',path:"about.html"},{name:"sasd"}]}/> */}
      </div>
    );
  }

}
const mapStateToProps=state=>{
  return{
    isAuthenticated:state.user && state.user.isAuthenticated?true:false,
  }
}
export default connect(mapStateToProps)(App);
