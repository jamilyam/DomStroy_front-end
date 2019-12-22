import React from 'react';
import Core from "../../components/core/core";


class PaymentInfo extends React.Component {
  render() {
    return(
      <Core>
        <div className='payment-info'>
          <h3>Оплата наличными</h3>
          <p>Оплата производится в сомах. В подтверждение оплаты мы выдаем фискальный чек.</p>
          <h3>Оплата картой</h3>
          <p>
            Оплата платежной картой происходит через систему непосредственно при оформлении заказа.
            К оплате принимаются только именные пластиковые карты.<br/>
            Для осуществления платежа вам потребуются данные Вашей карты на авторизационном сервере системы.
          </p>
          <p>
            При проведении оплаты платёжными картами используется Paypal.
            Для оплаты требуется ввести данные карты (номер, CVC/СVV код, срок действия)
            в защищенном виджете платежной системы.
            Вы будете перенаправлены на его сервер для прохождения дополнительной идентификации.
          </p>
        </div>
      </Core>
    )
  }

}

export default PaymentInfo;