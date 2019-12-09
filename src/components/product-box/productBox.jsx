import React from 'react';
import './productBox.scss';
import ButtonIcon from "../button-icon/button-icon";


class ProductBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      addToCart:this.addToCart(),
      cart: []
    }
  }

  render() {

    const {id, image, name, brand, type, color, description, price, category, weight, isOnSale, liked} = this.state.product;
    const likedProducts = this.state.likedProducts || [];

    return(
      <div className='product-box'>
        {likedProducts.indexOf(id) !== -1 && <img
          className='like'
          src='/like.svg'
          width='30px'
          height='30px'
        />}

        <div className='status'>
          {isOnSale && <div className='on-sale'>-50%</div>}
        </div>
        <div className='n-image'><img src={image}/></div>
        <div className='name'><a href={`/product-list/${id}`}>{name}</a></div>
        {/*<div className='brand'>Бренд:{brand}</div>*/}
        <div className='price'>Цена:{price}сом

            {likedProducts.indexOf(id) !== -1  ?
              <ButtonIcon
                type = 'favorite'
                onClick={() => this.changeStatusToLiked(false, id)}>
              </ButtonIcon> :
              <ButtonIcon
                type = 'favorite'
                onClick={() => this.changeStatusToLiked(true, id)}>
              </ButtonIcon>
            }
            <ButtonIcon
              type = 'shopping-cart'
              onClick={() =>{

              }

              }

            ></ButtonIcon>

        </div>
        <div className='category'>Категория: {category}</div>
        <div className='know-more'>
          <a href={`/product-list/${id}`}>Подробнее</a>
        </div>
        {/*<div className='weight'>Вес/Габариты:{weight} кг</div>*/}
        {/*<div className='color'>Цвет:{color}</div>*/}
        {/*<div className='type'>Тип:{type}</div>*/}
        {/*<div className='description'>Описание: {description}</div>*/}

      </div>
    )
  }
  changeStatusToLiked(isLiked, productId) {
    this.props.onStatusChange(isLiked, productId);
  }

  addToCart = () => {

  }
}

export default ProductBox;