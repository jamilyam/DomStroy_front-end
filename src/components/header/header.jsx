import React from 'react';
import './header.scss';
import InputSearch from "../search-input/search-input";
import ButtonIcon from "../button-icon/button-icon";
import {withRouter} from 'react-router-dom';
import Context from "../../context";


class Header extends React.Component{
  render() {
    return(
      <Context.Consumer>
        {(context) => (
          <div className='header'>
            {/*<ButtonIcon className = 'burger'*/}
            {/*  type='burger'*/}
            {/*  onClick={() => {*/}
            {/*}}/>*/}
            <img className="logo" alt='logo' src="/logo192.png"
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
              // onEnter={(value) => {
              //   this.props.onSearch(value);
              // }}
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