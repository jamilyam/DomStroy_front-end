import React from 'react';
import './searchResults.scss';
import Core from "../../components/core/core";
import { withRouter } from 'react-router-dom';
import ProductBox from "../../components/productBox/productBox";


class SearchResults extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  async componentDidMount() {
    const searchValue = this.props.match.params.searchValue;
    const response = await fetch(`http://localhost:3000/products?name_like=${searchValue}`)
    const products = await response.json()
    this.setState({
      products
    })
  }

  render() {
    return(
      <Core>
        <div className='search-results'>
          {this.state.products.map((product, index) => {
            return (
              <ProductBox
                key={`product-${index}`}
                product={product}
              />
            )
          })}
        </div>
      </Core>
    )
  }
}

export default withRouter(SearchResults);