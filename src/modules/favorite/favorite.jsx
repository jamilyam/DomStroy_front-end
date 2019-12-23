import React, {Component} from 'react';
import Core from "../../components/core/core";
import Context from "../../context";
import ProductBox from "../../components/productBox/productBox";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likedProducts: []
    }
  }
  render() {
    return (
      <Core>
        <Context.Consumer>
          {(context) => (
            <div className='favorite-products'>
              Количество товаров: {context.likedProducts.length}
              <div className='products-display'>
              {context.likedProducts.map((product, index) => {
                return (
                  <ProductBox
                    key={`product-${index}`}
                    product={product}
                  />
                )
              })}
              </div>
            </div>
          )}
        </Context.Consumer>
      </Core>
    );
  }
}

export default Favorite;