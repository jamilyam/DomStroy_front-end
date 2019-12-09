import React from 'react';
import './productList.scss';
import ProductBox from "../../components/product-box/productBox";
import Core from "../../components/core/core";


class ProductList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      likedProducts: []
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
            <div className='parent-container'>
              <div className='products'>
                {this.state.products.map((product, index) => {
                    return(
                      <ProductBox
                        key={`product-${index}`}
                        product={product}
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

export default ProductList;