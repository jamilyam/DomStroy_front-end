import React from 'react';
import './category.scss';
import { withRouter } from 'react-router-dom';

class Category extends React.Component {
  render() {
    return(
      <div
        className='category-name'
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    )
  }
}

export default withRouter (Category);