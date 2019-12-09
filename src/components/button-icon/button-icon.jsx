import React from 'react';
import './button-icon.scss';
import { withRouter } from 'react-router-dom';

class ButtonIcon extends React.Component{
  render() {
    return(
      <div className='icon'>
        <button
          className={this.props.type}
          onClick={this.props.onClick}
        >
        </button>
      </div>
    )
  }
}

export default withRouter (ButtonIcon);