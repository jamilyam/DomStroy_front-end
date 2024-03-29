import React from 'react';
import './companyInfo.scss';
import Core from "../../components/core/core";

class CompanyInfo extends React.Component {
  render() {
    return(
      <Core>
        <div className='company-info'>
          <h1>«DomStroy» - онлайн-магазин строительных товаров!</h1>
          <p>
            Онлайн магазин предлагает строительные материалы по привлекательной цене высокого качества.
            Весь ассортимент, представленный в интернет-магазине, поставляется от производителей напрямую,
            а это значит, что при покупке клиент получает оригинальный товар, проверенный временем и зарекомендовавший
            себя на рынке.</p>

          <p>
            Главной задачей интернет-магазина является облегчение жизни своим клиентам.
            Мы стараемся как можно ближе подойти к потребностям своих потребителей и
            сделать ремонт и благоустройство дома комфортнее.</p>

          <p>
            Как известно, ремонт всегда проходит в сжатых сроках и отклоняется от планов и задумок.
            Такая особенность может негативно сказаться на настроении и самочувствии жильцов.
            Постоянно приходится докупать материалы, переделывать то, что на картинке казалось приемлемым,
            а вот в жизни совершенно не смотрится. Если такие трудности вам уже встречались,
            то позвольте нам взяться за дело и во многом облегчить процесс преображения дома.</p>

          <p>
            Благодаря нашему интернет-магазину создается контраст между самостоятельными закупками
            на строительных рынках и нашими услугами по доставке и оформлению заказа,
            совершенного в режиме онлайн. Все строительные материалы, приобретенные у нас,
            соответствуют стандартам качества, их рекомендуют профессионалы строительного дела.</p>

          <p>
            По вопросам оплаты с помощью банковской карты и иным вопросам, связанным с работой сайта,
            Вы можете обратиться по следующим телефону: +996 770 540005</p>

          <p>
            Не тратьте время на поездку в строительные ряды, ведь когда дело касается ремонта,
            важна каждая минута!
          </p>
          <div>
            <ul>
              <li>ОсОО "DomStroy"</li>
              <li>адрес: г. Бишкек, ул. Салиева, 225</li>
              <li>Телефон: +996 770 540005</li>
              <li>E-mail: info@domstroy.kg</li>
            </ul>
          </div>
        </div>
      </Core>
    )
  }
}

export default CompanyInfo;