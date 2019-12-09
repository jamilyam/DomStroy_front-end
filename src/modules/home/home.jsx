import React from 'react';
import './home.scss';
import ProductBox from "../../components/product-box/productBox";
import ProductOnSale from "../product-onsale-list/productonsale";
import Category from "../../components/category/category";
import CATEGORIES from "../../data/data";
import Core from "../../components/core/core";
import Banner from "../../components/banner/banner";

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      likedProducts: []
    }
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/products?_page=1&_limit=4");
    const products = await response.json();
    this.setState( {
      products: products
    });
  }

    render() {
        return(
          <Core onSearch={async (searchValue) => {
            const response = await fetch(`http://localhost:3000/products?name_like=${searchValue}`);
            const products = await response.json();
            this.setState({
              products: products
            });
          }}>
            <div className='home'>
              {/*<b>Liked notebooks:{this.state.likedNotebooks.length}</b>*/}
              <div className='first-block'>
                <div className='categories'>
                  {CATEGORIES.map((category)=> {
                    return <Category
                      name={category}
                      onClick={() => {
                        this.props.history.push(`/categories/${category}`)
                      }}
                    >
                      {category}
                    </Category>
                  })}
                </div>
                <Banner/>
              </div>
              <div className='h'> <a href={`/product-list`}>Популярные товары</a></div>
              <div className='products'>
                {this.state.products.map((product) => {
                  return (
                    <ProductBox
                      key={`product-${product.id}`}
                      product={product}
                      likedProducts={this.state.likedProducts}
                      onStatusChange={(isLiked, productId) => {
                        this.onStatusChange(isLiked, productId);
                      }
                      }
                    />
                  )
                })}
              </div>
              <div className='h'> <a href={`/product-on-sale`}>Товары со скидкой</a></div>
              <div className='products-on-sale'><ProductOnSale/></div>
            </div>
          </Core>
        )
    }
  onStatusChange(isLiked, productId) {
    const likedProducts = this.state.likedProducts;

    if (isLiked) {
      likedProducts.push(productId);
    } else {
      const index = likedProducts.indexOf(productId);
      likedProducts.splice(index, 1);
    }

    this.setState({
      likedProducts
    })
  }
}

export default Home;