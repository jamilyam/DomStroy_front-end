import React from 'react';
import './header.scss';
import InputSearch from "../searchInput/searchInput";
import ButtonIcon from "../buttonIcon/buttonIcon";
import {withRouter} from 'react-router-dom';
import Context from "../../context";

class Header extends React.Component{
  render() {
    return(
      <Context.Consumer>
        {(context) => (
          <div className='header'>
            <img className="logo" alt='logo' src='/logo.png'
                 onClick={() => {
                   this.props.history.push('/')
                 }}
            />
            {this.props.links.map(link => {
              return(
                <a href={link.link}>{link.name}</a>
              )
            })}
            <InputSearch
              onEnter={(value) => {
                this.props.history.push(`/search-results/${value}`);
              }}
            />
            <ButtonIcon
              type='favorite'
              title='избранные'
              onClick={() => {
                this.props.history.push('/favorite-products-list')
              }
              }
            >
              <div className='counter'>{context.likedProducts.length}</div>
            </ButtonIcon>
            <ButtonIcon
              type='sign-in-form'
              title='войти'
              onClick={() => {
                this.props.history.push('/sign-in-form')
              }}
            />
            <ButtonIcon
              type='shopping-cart'
              title='корзина'
              onClick={() => {
                this.props.history.push('/my-cart')
              }}
            />
          </div>
        )}
      </Context.Consumer>
    )
  }
}

export default withRouter(Header);