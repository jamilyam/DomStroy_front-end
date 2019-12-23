import React from 'react';
import './singleProduct.scss';
import { withRouter } from "react-router-dom";
import Core from "../../components/core/core";
import Context from "../../context";


class SingleProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null
    }
  }

  async componentDidMount() {
    const productId = this.props.match.params.productId;
    const response = await fetch(`http://localhost:3000/products/${productId}`);
    const product = await response.json();

    this.setState({
      product: product
    });
  }

  render() {
    if (!this.state.product) {
      return null;
    }
    const {image, name, brand, type, color, description, price, category, weight} = this.state.product;

    return(
      <Context.Consumer>
        {(context) => (
          <Core>
            <div className='product'>
              <div className='name'>{name}</div>
              <div className='product-info'>
                <div className='product-image'>
                  <img className='image' src={image} alt='product'/>
                </div>
                <div className='info'>
                  <h3>Характеристика товара</h3>
                  <div className='brand'>
                    Бренд: <span>{brand}</span>
                  </div>
                  <div className='category'>
                    Категория: <span>{category}</span>
                  </div>
                  <div className='weight'>
                    Вес/Габариты: <span>{weight} кг</span>
                  </div>
                  <div className='color'>
                    Цвет: <span>{color}</span>
                  </div>
                  <div className='type'>
                    Тип: <span>{type}</span>
                  </div>
                </div>
                <div className='price'>
                  Цена: <p>{price} сом</p>
                  <button
                    onClick={() => context.onAddToCart(true, this.state.product)}>
                    Купить
                  </button>
                </div>
              </div>
              <div className='description'><p>Описание</p>{description}</div>
            </div>
          </Core>
        )}
      </Context.Consumer>
    )
  }
}

export default withRouter(SingleProduct);
