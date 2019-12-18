import React from 'react';
import './home.scss';
import ProductBox from "../../components/product-box/product-box";
import Category from "../../components/category/category";
import { CATEGORIES } from "../../data/data";
import Core from "../../components/core/core";
import Banner from "../../components/banner/banner";
import ProductOnSale from "../../components/product-on-sale/product-on-sale";

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
              <div className='block'>
                <a href={`/product-list`}>Все товары</a>
              </div>
              <div className='products'>
                {this.state.products.map((product) => {
                  return (
                    <ProductBox
                      key={`product-${product.id}`}
                      product={product}
                      // likedProducts={this.state.likedProducts}
                      // onStatusChange={(isLiked, productId) => {
                      //   this.onStatusChange(isLiked, productId);
                      // }
                      // }
                    />
                  )
                })}
              </div>
              <div className='block'>
                <a href={`/product-on-sale`}>Товары со скидкой</a>
              </div>
              <div className='on-sale'>
                <ProductOnSale/>
              </div>
            </div>
          </Core>
        )
    }
  getProducts = async () => {
    const response = await this.getProducts(`http://localhost:3000/products?_page=1&_limit=4`);
    const products = await response.json();
      this.setState( {
        products: products
      });
  };
  onSearch = async (searchValue) => {
    const response = await fetch(`http://localhost:3000/products?name_like=${searchValue}`);
    const products = await response.json();
    this.setState({
      products: products
    });
  }
}

export default Home;