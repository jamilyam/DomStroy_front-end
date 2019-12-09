import React from 'react';
import './productonsale.scss';
import ProductBox from "../../components/product-box/productBox";
import Core from "../../components/core/core";


class ProductOnSale extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      likedProducts: []
    }
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/products?isOnSale=true");
    const products = await response.json();
    this.setState( {
      products: products
    });
  }
  render() {
    return(
      <div className='parent-container'>
        <div className='products-on-sale'>
          {this.state.products.map((product, index) => {
            return(
              <ProductBox
                key={`product-${index}`}
                product={product}
                isOnSale={true}
                likedProducts={this.state.likedProducts}
                onStatusChange={(isLiked, productId) => {
                  this.onStatusChange(isLiked, productId);
                }}
              />
            )
          }
        )}
        </div>
      </div>
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

export default ProductOnSale;
