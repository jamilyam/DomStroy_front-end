import React from 'react';
import './shoppingCart.scss';
import { withRouter } from "react-router-dom";
import Core from "../../components/core/core";
import Popup from "../../components/popup/popup";
import Context from "../../context";
import ProductTableRow from "../../components/productTableRow/productTableRow";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkOutPopupIsVisible: false,
      boughtProducts: []
    }
  }

  render() {
    return (
      <Context.Consumer>
        {(context) => (
      <Core>
        <div className='shopping-cart'>
          <div className='product-row'>
            {context.boughtProducts.map((product, index) => {
              return (
                <ProductTableRow
                  key={`product-${index}`}
                  product={product}/>
              )
            })}
          </div>
          <div className='total'>
            <div className='row'>
              <p>Количество товаров: {context.boughtProducts.length}</p>
              <span className='left'>Итого:</span>
              <span className='right'></span>
            </div>
            <div>
              <Popup
                isOpen={this.state.checkOutPopupIsVisible}
              >
              </Popup>
            </div>
          </div>
        </div>
      </Core>
        )}
      </Context.Consumer>
    )
  }
}

export default withRouter(ShoppingCart);


