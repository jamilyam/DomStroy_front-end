import React from 'react';
import './input.scss';

class Input extends React.Component{
  render() {
    return(
      <div className='input-with-title'>
        <h4>{this.props.title}</h4>
        <input />
      </div>
    )
  }
}

export default Input;