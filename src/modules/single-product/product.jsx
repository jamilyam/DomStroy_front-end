import React from 'react';
import './product.scss';
import { withRouter } from "react-router-dom";
import Core from "../../components/core/core";
import ButtonIcon from "../../components/button-icon/button-icon";


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
      const {id, image, name, brand, type, color, description, price, category, weight, isOnSale, liked} = this.state.product;

        return(
          <Core>
            <div className='product'>
              <div className='name'>{name}</div>
              <div className='product-info'>
                <div className='n-image'><img src={image}/></div>
                <div className='info'>
                  <h3>Характеристика товара</h3>
                  <div className='brand'>Бренд: {brand}</div>
                  <div className='category'>Категория: {category}</div>
                  <div className='weight'>Вес/Габариты: {weight} кг</div>
                  <div className='color'>Цвет: {color}</div>
                  <div className='type'>Тип: {type}</div>
                </div>
                <div className='price'>{price}сом
                  <ButtonIcon
                    type = 'shopping-cart'
                    onClick={() =>{}

                    }
                  ></ButtonIcon>
                </div>
              </div>
              <div className='show'>Описание
                <div className='description'>{description}</div>
              </div>
            </div>
          </Core>
        )
    }
}

export default withRouter(SingleProduct);
