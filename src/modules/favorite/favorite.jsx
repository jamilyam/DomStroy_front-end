import React, {Component} from 'react';
import Core from "../../components/core/core";
import Context from "../../context";
import ProductBox from "../../components/product-box/product-box";

class Favorite extends Component {
  render() {
    return (
      <Core>
        <Context.Consumer>
          {(context) => (
            <div className='favorite-products'>
              COUNT: {context.likedProducts.length}
              {context.likedProducts.map((product) => {
                return (
                  <ProductBox
                    key={`product-${product.id}`}
                    product={product}
                  />
                )
              })}
            </div>
          )}
        </Context.Consumer>
      </Core>
    );
  }
}

export default Favorite;