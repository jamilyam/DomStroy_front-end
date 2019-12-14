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
            <div className='counter'>
              {context.likedProducts.map((product) => {
                console.log(product)
                return <ProductBox
                  key={`product-${product.id}`}
                  product={product}
                />
              })}
              COUNT: {context.likedProducts.length}
            </div>
          )}
        </Context.Consumer>
      </Core>
    );
  }
}

export default Favorite;