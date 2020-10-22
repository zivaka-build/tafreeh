import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/header/header';
import SrollTop from './components/ScrollToTop/scroll.top';
import Footer from './components/footer/footer';
import HomePage from './components/pages/home/home';
let arr=[{name:'Condimentum Food',tag:'fruit',price:'160.00',old_price:'180.00',img:'assets/images/product-product-1.png'},
{name:'Tincidunt Malesuada',tag:'coffee',price:'60.00',old_price:'180.00',img:'assets/images/product-product-1.png'},
{name:'Tincidunt Malesuada',tag:'coffee',price:'60.00',img:'assets/images/product-product-1.png'},
];
function App() {
  return (
    <div className="App">

      
      <Router>
        <SrollTop/>
        <Header/>
        
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
        <Footer/>
      </Router>
      
      
      {/* <Breadcrumb 
      items={[{name:"home",path:"index.html"},{name:'about us',path:"about.html"},{name:"sasd"}]}/> */}
    </div>
  );
}

export default App;
