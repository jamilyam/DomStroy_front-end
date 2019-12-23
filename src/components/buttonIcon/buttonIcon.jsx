import React from 'react';
import './buttonIcon.scss';
import { withRouter } from 'react-router-dom';

class ButtonIcon extends React.Component{
  render() {
    return(
      <div className='icon'>
        <button
          color={this.props.style}
          disabled={this.props.disabled}
          className={this.props.type}
          onClick={this.props.onClick}
        >
         {this.props.children}
        </button>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default withRouter (ButtonIcon);