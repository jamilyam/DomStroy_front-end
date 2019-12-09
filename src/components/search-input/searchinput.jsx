import React from 'react';
import './searchinput.scss';

class InputSearch extends React.Component{
  render() {
    return(
      <div className='input-search'>
        <input
          className="search"
          type="text"
          placeholder="Поиск"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              this.props.onEnter(e.target.value);
            }
          }}
        />
      </div>
    )
  }
}

export default InputSearch;