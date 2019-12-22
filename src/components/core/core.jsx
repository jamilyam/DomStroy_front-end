import React from 'react';
import './core.scss';
import Header from "../header/header";
import Footer from "../footer/footer";
import {FOOTERLINKS, LINKS} from "../../data/data";


class Core extends React.Component {
  render() {
    return (
      <div className='core'>
        <Header
          onSearch={(searchValue) => {
            this.props.onSearch(searchValue)
          }}
          links={LINKS}
        />
        <div className='core-body'>
          {this.props.children}
        </div>
        <Footer
          links={FOOTERLINKS}
        />
      </div>
    )
  }
}
export default Core;