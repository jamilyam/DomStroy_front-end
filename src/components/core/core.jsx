import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";

class Core extends React.Component {
  render() {
    return (
      <div className='core'>
        <Header
          onSearch={(searchValue) => {
            this.props.onSearch(searchValue)
          }}
          links={[
            {
              name: 'Акции',
              link: '/product-on-sale'
            },
            {
              name: 'Обзоры',
              link: '/test'
            },
            {
              name: 'Доставка',
              link: '/delivery'
            }
          ]}
        />

        {this.props.children}

        <Footer
          links={[
            {
              name: 'О компании',
              link: '/about-us'
            },
            {
              name: 'Способы оплаты',
              link: '/payment-info'
            },
            {
              name: 'Возврат',
              link: '/company-policy-info'
            },
            {
              name: 'Мой аккаунт',
              link: '/user-profile'
            }
          ]}
        />
      </div>
    )
  }
}
export default Core;