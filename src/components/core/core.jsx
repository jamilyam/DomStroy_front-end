import React from 'react';
import './core.scss';
import Header from "../header/header";
import Footer from "../footer/footer";
import {FOOTERLINKS, LINKS} from "../../data/data";
import Context from "../../context";

class Core extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likedProducts: [],
      boughtProducts: []
    }
  }
  render() {
    return (
      <Context.Provider value={
        {
          likedProducts: this.state.likedProducts,
          changeStatus: (liked, id) => {
            const lProducts = this.state.likedProducts
            if (liked) {
              lProducts.push(id)
            } else {
              const index = lProducts.indexOf(id)
              lProducts.splice(index, 1)
            }

            this.setState({
              likedProducts: lProducts
            })
          },
          boughtProducts: this.state.boughtProducts,
          onAddToCart: (inCart, id) => {
            debugger
            const cart = this.state.boughtProducts;
            if (inCart) {
              cart.push(id);
            } else {
              const index = cart.indexOf(id);
              cart.splice(index, 1);
            }

            this.setState({
              boughtProducts: cart
            })
          }
        }
      }>
        <div className='core'>
          <Header
            onSearch={(searchValue) => {
              this.props.onSearch(searchValue)
            }}
            links={LINKS}
          />
          <div className='core-body'>
            {this.props.children}
          </div>
          <Footer
            links={FOOTERLINKS}
          />
        </div>
      </Context.Provider>
    )
  }
}
export default Core;