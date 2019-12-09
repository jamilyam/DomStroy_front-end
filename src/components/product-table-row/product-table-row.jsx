import React from 'react';
import './product-table-row.scss';
import OnSale from "../onsale/onsale";

class ProductTableRow extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
    }
  }
  render() {
    const {name, image, price, description, onSale} = this.state.product;

    return(
      <div className='product-table-row'>
        <img src={image} className='n-image'/>
        <div className='td'>{name}</div>
        <div className='td'>{price}</div>
        <div className='td status'>
          <OnSale onSale={onSale}/></div>
        <div className='delete'>
          <button onClick={() => this.delete()}>
            Удалить
          </button>
        </div>
      </div>
    )
  }
  delete() {
    const product = this.state.product;
    this.setState({
      product: ''
    })
  }
}

export default ProductTableRow;