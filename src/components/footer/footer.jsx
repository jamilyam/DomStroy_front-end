import React from 'react';
import './footer.scss';
import { withRouter } from 'react-router-dom';
import ButtonIcon from "../buttonIcon/buttonIcon";

class Footer extends React.Component{
  render() {
    return(
      <div className='footer-container'>
        {this.props.links.map(link => {
          return(
            <div className='footer-links'>
              <a href={link.link}><h3>{link.title}</h3>{link.name}</a>
            </div>
          )
        })}
        <div className='social'>
          <h3>Контакты</h3>
          <div className='icons'>
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
      </div>
    )
  }
}

export default withRouter(Footer);