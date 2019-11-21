import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Redirect,
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom';
import Home from "./Modules/Home/home";
import SignInForm from "./Modules/Sign-in-form/signin";
import UserProfile from "./Modules/user-profile/user";
import Categories from "./Modules/categories/categories";
import ProductList from "./Modules/product-list/productlist";
import SingleProduct from "./Modules/single-product/product";
import UserBasket from "./Modules/user-basket/basket";
import CheckoutPage from "./Modules/checkout-page/checkout";
import Delivery from "./Modules/delivery/delivery";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Home}></Route>
          <Route path='/sign-in-form' exact={true} component={SignInForm}></Route>
          <Route path='/user-profile' exact={true} component={UserProfile}></Route>
          <Route path='/categories' exact={true} component={Categories}></Route>
          <Route path='/product-list' exact={true} component={ProductList}></Route>
          <Route path='/product-list/:productId' component={SingleProduct}></Route>
          <Route path='/basket' exact={true} component={UserBasket}></Route>
          <Route path='/checkout' exact={true} component={CheckoutPage}></Route>
          <Route path='/delivery' exact={true} component={Delivery}></Route>
          <Redirect from='/*' to='/'></Redirect>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
