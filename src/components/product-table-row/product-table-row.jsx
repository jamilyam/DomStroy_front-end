import React from 'react';
import './product-table-row.scss';
import Context from "../../context";
import product from "../../modules/single-product/single-product";

class ProductTableRow extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      boughtProducts: []
    }
  }

  render() {
    return(
      <Context.Consumer>
        {(context) => (
          <div className='product-table-row'>
            <table className='table'>
              <tr>
                <th>Картинка</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Кол-во</th>
                <th>Удалить</th>
              </tr>
              <tr>
                <td><img className='small-image' alt='img' src={this.props.product.image}/></td>
                <td>
                  <span className="name">{this.props.product.name}</span>
                </td>
                <td>
                  <span>{this.props.product.price}</span>
                </td>
                <td>
                  <span>1</span>
                </td>
                <td>
                  <button
                    className='delete'
                    onClick={() => context.onAddToCart(false, product)}>
                    Удалить
                  </button>
                </td>
              </tr>
            </table>
          </div>
        )}
      </Context.Consumer>
    )
  }
}

export default ProductTableRow;