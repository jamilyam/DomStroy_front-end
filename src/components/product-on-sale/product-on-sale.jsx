import React from 'react';
import './product-on-sale.scss';
import ProductBox from "../product-box/product-box";

class ProductOnSale extends React.Component {
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
    return (
      <div className='product-on-sale'>
        {this.state.products.map((product, index) => {
            return(
              <ProductBox
                key={`product-${index}`}
                product={product}
                isOnSale={true}
              />
            )
          }
        )}
      </div>
    )
  }
}

export default ProductOnSale;