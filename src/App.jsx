import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Redirect,
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom';
import Home from "./modules/home/home";
import SignInForm from "./modules/sign-in-form/signIn";
import UserProfile from "./modules/user-profile/userProfile";
import Categories from "./modules/categories/categories";
import ProductList from "./modules/product-list/productList";
import ProductOnSale from "./modules/product-onsale-list/productonsale";
import SingleProduct from "./modules/single-product/product";
import Delivery from "./modules/delivery/delivery";
import SearchResults from "./modules/search-results/searchresults";
import CompanyInfo from "./modules/company-info/company-info";
import Payment from "./modules/payment-info/payment";
import Policy from "./modules/policy/policy";
import {ShoppingCart} from "./modules/user-cart/ShoppingCart";

function App() {
  return (

      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Home}></Route>
          <Route path='/sign-in-form' exact={true} component={SignInForm}></Route>
          <Route path='/user-profile' exact={true} component={UserProfile}></Route>
          <Route path='/categories' exact={true} component={Categories}></Route>
          <Route path='/search-results' exact={true} component={SearchResults}></Route>
          <Route path='/product-list' exact={true} component={ProductList}></Route>
          <Route path='/product-on-sale' exact={true} component={ProductOnSale}></Route>
          <Route path='/product-list/:productId' component={SingleProduct}></Route>
          <Route path='/my-cart' exact={true} component={ShoppingCart}></Route>
          <Route path='/delivery' exact={true} component={Delivery}></Route>
          <Route path='/about-us' exact={true} component={CompanyInfo}></Route>
          <Route path='/payment-info' exact={true} component={Payment}></Route>
          <Route path='/company-policy-info' exact={true} component={Policy}></Route>
          <Route path='/categories/:categoryName' component={Categories}></Route>
          <Redirect from='/*' to='/'></Redirect>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
