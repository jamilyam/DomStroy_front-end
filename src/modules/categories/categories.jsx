import React from 'react';
import './categories.scss';
import ProductBox from "../../components/product-box/product-box";
import {withRouter} from 'react-router-dom';
import Category from "../../components/category/category";
import {CATEGORIES} from "../../data/data";
import Core from "../../components/core/core";


class Categories extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  async componentDidMount() {

    const category = this.props.match.params.categoryName;

    const response = await fetch(`http://localhost:3000/products?category=${category.toLowerCase()}`);
    const products = await response.json();

    this.setState({
      products: products
    });
  }
    render() {
      return(
        <Core onSearch={async (searchValue) => {
          const response = await fetch(`http://localhost:3000/products?name_like=${searchValue}`);
          const products = await response.json();
          this.setState({
            products: products
          });
        }}>
          <div className='categories'>

            <div className='categories-filter'>
              {CATEGORIES.map(category => {
                return (
                  <Category
                    name={category}
                    onClick={async () => {
                      debugger;
                      const response = await fetch(`http://localhost:3000/products?category=${category.toLowerCase()}`);
                      const products = await response.json()

                      this.setState({
                        products
                      })
                    }}
                  >
                    <h3>{category}</h3>
                  </Category>
                )
              })}
            </div>

            <div className='category-products'>
              {this.state.products.map((product) => {
                return (
                  <ProductBox
                    key={`product-${product.id}`}
                    product={product}
                    category={product.category}
                  />
                )
              })}
            </div>


          </div>
        </Core>
        )
    }

}

export default withRouter(Categories);