import React from 'react';
import Modal from "react-modal";
import Input from "../input/input";

const customStyles = {
  content : {
    transform: 'translate(0%, 50%)',
    maxWidth: '500px',
    padding : '20px',
    bgColor: 'white',
    margin: 'auto'
  }
};

class Popup extends React.Component{
  render() {
    return(
      <div className='modal'>
        <Modal className='inner-modal'
          isOpen={this.props.isOpen}
               style={customStyles}
        >
          <div className='close'
               onClick={() => {}}
          >X</div>
          <div className='form'>
            <Input title='Имя'/>
            <Input title='Пароль'/>
            <div>
            <button className='login' onClick={() => {}}
            >Войти</button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Popup;
