import React from 'react';
import './header.scss';
import InputSearch from "../search-input/searchinput";
import ButtonIcon from "../button-icon/button-icon";
import {withRouter} from 'react-router-dom';


class Header extends React.Component{
  render() {
    return(
      <div className='header'>
        <img className="logo" src="/logo192.png"
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
              this.props.onSearch(value);
            }}
          />
          <ButtonIcon
            type='favorite'
            onClick={() => {

            }
            }
          />
          <ButtonIcon
            type='user-profile'
            onClick={() => {
             this.props.history.push('/user-profile')
            }}
          />
          <ButtonIcon
           type='shopping-cart'
           onClick={() => {
             this.props.history.push('/my-cart')
           }}
          />
      </div>
    )
  }
}

export default withRouter(Header);