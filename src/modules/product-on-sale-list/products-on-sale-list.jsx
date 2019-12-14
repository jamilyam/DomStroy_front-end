import React from 'react';
import './products-on-sale-list.scss';
import Core from "../../components/core/core";
import ProductOnSale from "../../components/product-on-sale/product-on-sale";

class ProductsOnSaleList extends React.Component{
  render() {
    return(
      <Core>
        <div className='products-on-sale-list'>
          <div className='products-on-sale'>
            <ProductOnSale/>
          </div>
        </div>
      </Core>
    )
  }
}

export default ProductsOnSaleList;
