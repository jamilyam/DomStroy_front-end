import React from 'react';
import logo from './logo.svg';
import {
    Redirect,
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom';
import Home from "./modules/home/home";
import SignInForm from "./modules/sign-in-form/sign-in-form";
import Categories from "./modules/categories/categories";
import ProductList from "./modules/product-list/productList";
import ProductsOnSaleList from "./modules/product-on-sale-list/products-on-sale-list";
import SingleProduct from "./modules/single-product/single-product";
import Delivery from "./modules/delivery/delivery";
import SearchResults from "./modules/search-results/searchresults";
import CompanyInfo from "./modules/company-info/company-info";
import Payment from "./modules/payment-info/payment";
import ShoppingCart from "./modules/shopping-cart/shopping-cart";
import Favorite from "./modules/favorite/favorite";
import Context from "./context";
import Footer from "./components/footer/footer";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likedProducts: [],
      boughtProducts: []
    }
  }
  render() {

  return (
    <Context.Provider value={
      {
        likedProducts: this.state.likedProducts,
        changeStatus: (liked, product) => {
          const lProducts = this.state.likedProducts
          if (liked) {
            lProducts.push(product)
          } else {
            const index = lProducts.indexOf(product)
            lProducts.splice(index, 1)
          }

          this.setState({
            likedProducts: lProducts
          })
        },
        boughtProducts: this.state.boughtProducts,
        onAddToCart: (inCart, product) => {
          const cart = this.state.boughtProducts;
          if (inCart) {
            cart.push(product);
          } else {
            const index = cart.indexOf(product);
            cart.splice(index, 1);
          }

          this.setState({
            boughtProducts: cart,
            bgColor: 'yellow'
          })
        }
      }
    }>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Home}></Route>
          <Route path='/sign-in-form' exact={true} component={SignInForm}></Route>
          <Route path='/categories' exact={true} component={Categories}></Route>
          <Route path='/search-results/:searchValue' exact={true} component={SearchResults}></Route>
          <Route path='/product-list' exact={true} component={ProductList}></Route>
          <Route path='/products-on-sale' exact={true} component={ProductsOnSaleList}></Route>
          <Route path='/product-list/:productId' component={SingleProduct}></Route>
          <Route path='/favorite-products-list' component={Favorite}></Route>
          <Route path='/my-cart' exact={true} component={ShoppingCart}></Route>
          <Route path='/delivery' exact={true} component={Delivery}></Route>
          <Route path='/about-us' exact={true} component={CompanyInfo}></Route>
          <Route path='/payment-info' exact={true} component={Payment}></Route>
          <Route path='/categories/:categoryName' component={Categories}></Route>
          <Redirect from='/*' to='/'></Redirect>
          <Footer/>
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  )
}
}

export default App;
