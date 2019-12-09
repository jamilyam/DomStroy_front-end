import React from 'react';
import './company-info.scss';
import Core from "../../components/core/core";

class CompanyInfo extends React.Component {
  render() {
    return(
      <Core onSearch={async (searchValue) => {
        const response = await fetch(`http://localhost:3000/products?name_like=${searchValue}`);
        const products = await response.json();
        this.setState({
          products: products
        });
      }}>
        <div className='company-info'></div>
      </Core>
    )
  }

}

export default CompanyInfo;