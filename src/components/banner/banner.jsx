import React from 'react';
import './banner.scss';
import { withRouter } from 'react-router-dom';

class Banner extends React.Component{

  render() {
    return(
      <div className='banner'>
        <div className='name'>
          <a href={`/product-list/${18}`}>Купить</a>
        </div>
      </div>
    )
  }
}

export default withRouter (Banner);