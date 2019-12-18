import React from 'react';
import './product-box.scss';
import ButtonIcon from "../button-icon/button-icon";
import Context from "../../context";


class ProductBox extends React.Component {
  render() {
    const {id, image, name, price, category, isOnSale} = this.props.product;

    return(
      <Context.Consumer>
        {(context) => (
          <div className='product-box'>
            {context.likedProducts.indexOf(this.props.product) !== -1 && <img
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
            <div className='price'><span>Цена:{price}сом</span>
              {context.likedProducts.indexOf(this.props.product) !== -1  ?
                <ButtonIcon
                  type = 'favorite'
                  onClick={() => context.changeStatus(false, this.props.product)}>
                </ButtonIcon> :
                <ButtonIcon
                  type = 'favorite'
                  onClick={() => context.changeStatus(true, this.props.product)}>
                </ButtonIcon>
              }
              <ButtonIcon
                type = 'shopping-cart'
                onClick={() => context.onAddToCart(true, this.props.product)}>
              </ButtonIcon>
            </div>
            <div className='category'>Категория: {category}</div>
            <div className='know-more'>
              <a href={`/product-list/${id}`}>Подробнее</a>
            </div>
          </div>
        )}
      </Context.Consumer>
    )
  }
}

export default ProductBox;