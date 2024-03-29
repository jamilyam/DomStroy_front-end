import React from 'react';
import './delivery.scss';
import Core from "../../components/core/core";

class Delivery extends React.Component{
  render() {
    return(
      <Core>
        <div className='delivery'>
          <p>
            <strong><p>Мы стараемся осуществить доставку в пределах города в самое короткое время:</p></strong>

            Заявки на доставку по городу принятые до 12:30, со статусом доставки день в день,
            выполняются до 18:30 текущего дня, доставка при этом зависит от суммы заказа:<br/>
            <ul>
              <li>Заявка до 5 кг - доставка 200 сом;</li>
              <li>Заявка от 6 кг до 100 кг – доставка 400 сом;</li>
              <li>Заявка от 100 кг – доставка 700 сом;</li>
            </ul>
            <br/>
            Заявки на доставку по городу принятые после 12:30, выполняются на следующий день до 13:00,
            доставка при этом зависит от суммы заказа:<br/>

            <strong><p>Внимание: Доставка осуществляется только до подъезда (ворот). Услуги грузчиков не предоставляются.</p></strong>

            Перед доставкой наш курьер обязательно свяжется с Вами по указанным в заказе телефонам
            для уточнения адреса доставки и удобного времени.После оплаты курьер предоставит Вам фискальный чек,
            гарантийный талон (если он предусмотрен) и остальные документы.

            <strong><p>Внимание! Курьер не компетентен в вопросах, которые касаются свойств и качества товара.
              Для полной и достоверной информации свяжитесь с нами по телефонам,
              указанным во вкладке «Контакты» и наши специалисты подробно расскажут
              о приобретенной вами продукции.</p></strong>
          </p>
        </div>
      </Core>
    )
  }
}

export default Delivery;