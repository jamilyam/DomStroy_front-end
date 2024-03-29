import React from 'react';
import './productList.scss';
import ProductBox from "../../components/productBox/productBox";
import Core from "../../components/core/core";

class ProductList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      likedProducts: [],
      cart:[]
    }
  }

  async componentDidMount() {

    const response = await fetch("http://localhost:3000/products");
    const products = await response.json();
    this.setState( {
      products: products
    });
  }

  render() {
    return(
      <Core>
        <div className='products-list'>
          <div className='products'>
            {this.state.products.map((product, index) => {
                return(
                  <ProductBox
                    key={`product-${index}`}
                    product={product}
                  />
                )
              }
            )}
          </div>
        </div>
      </Core>
    )
  }
}

export default ProductList;