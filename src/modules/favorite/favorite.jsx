import React, {Component} from 'react';
import Core from "../../components/core/core";
import Context from "../../context";
import ProductBox from "../../components/product-box/product-box";
import ProductTableRow from "../../components/product-table-row/product-table-row";

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
              COUNT: {context.likedProducts.length}
              {context.likedProducts.map((product, index) => {
                return (
                  <ProductBox
                    key={`product-${index}`}
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