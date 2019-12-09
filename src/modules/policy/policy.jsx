import React from 'react';
import './policy.scss';
import Core from "../../components/core/core";

class Policy extends React.Component {
  render() {
    return(
      <Core onSearch={async (searchValue) => {
        const response = await fetch(`http://localhost:3000/products?name_like=${searchValue}`);
        const products = await response.json();
        this.setState({
          products: products
        });
      }}>
        <div className='delivery'></div>
      </Core>
    )
  }

}

export default Policy;