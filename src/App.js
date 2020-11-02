import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
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
function App() {
  return (
    <div className="App">

      
      <Router>
        <SrollTop/>
        <Header/>
        
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/profile" component={Profile}/>
          {/* <Route path="/cart" component={Cart}/> */}
          <Route path="/product_details" component={ProductDetails}/>
          <Route path="/about" component={AboutUs}/>
          <Route path="/login-register" component={UserLoginRegister}/>
          <Route path="/shop" component={Shop}/>
        </Switch>
        <Footer/>
      </Router>
      
      
      {/* <Breadcrumb 
      items={[{name:"home",path:"index.html"},{name:'about us',path:"about.html"},{name:"sasd"}]}/> */}
    </div>
  );
}

export default App;
