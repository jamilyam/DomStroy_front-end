import React from 'react';
import './productsOnSaleList.scss';
import Core from "../../components/core/core";
import ProductOnSale from "../../components/productOnSale/productOnSale";

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
