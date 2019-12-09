import React from 'react';
import './footer.scss';
import { withRouter } from 'react-router-dom';
import ButtonIcon from "../button-icon/button-icon";

class Footer extends React.Component{
  render() {
    return(
      <div className='footer'>
        {this.props.links.map(link => {
          return(
            <a href={link.link}>{link.name}</a>
          )
        })}
        <div className='social'>
          <div>Контакты</div>
          <ButtonIcon
            type='facebook'
            onClick={() => {
            }}
          />
          <ButtonIcon
            type='instagram'
            onClick={() => {
            }}
          />
          <ButtonIcon
            type='youtube'
            onClick={() => {
            }}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(Footer);