import React from 'react';
import './product-table-row.scss';
import Context from "../../context";
import product from "../../modules/single-product/single-product";

class ProductTableRow extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ...this.props
    }
  }

  render() {
    // const {name, image, price} = this.state.product;

    return(
      <Context.Consumer>
        {(context) => (
          <div className='product-table-row'>
            COUNT: {context.boughtProducts.length}
            COUNT: {context.likedProducts.length}
            <table className='table'>
              <tr>
                <th>Картинка</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Кол-во</th>
                <th>Удалить</th>
              </tr>
              <tr>
                <td><img alt='boughtProduct' src={this.props.product}/></td>
                <td>
                  <span className="name">{this.props.product}</span>
                </td>
                <td>
                  <span>{this.props.price}</span>
                </td>
                <td>
                  <span>1</span>
                </td>
                <td>
                  <button
                    className='delete'>
                    {/*// onClick={() => context.onAddToCart(false, id)}*/}
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