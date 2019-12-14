import React, {Component} from 'react';
import Context from "../../context";

class ProductTable extends Component {
  render() {
    return (
      <Context.Consumer>
        {(context) => (

          <div>
            <table className='table'>
              <tr>
                <th>Картинка</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Кол-во</th>
                <th>Удалить</th>
              </tr>
              Count: {context == null ? 'null' : 'not null'}
            </table>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default ProductTable;