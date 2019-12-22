import React from 'react';
import './shopping-cart.scss';
import { withRouter } from "react-router-dom";
import Core from "../../components/core/core";
import Popup from "../../components/popup/popup";
import Context from "../../context";
import ProductBox from "../../components/product-box/product-box";
import ProductTableRow from "../../components/product-table-row/product-table-row";

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
              <button
                onClick={()=> {
                  this.setState({
                    checkOutPopupIsVisible:true
                  })
                }}>
                Перейти к оформлению
              </button>
            </div>
          </div>
          <Popup
            isOpen={this.state.checkOutPopupIsVisible}
          >
          </Popup>
        </div>
      </Core>
        )}
      </Context.Consumer>
    )
  }
}

export default withRouter(ShoppingCart);


