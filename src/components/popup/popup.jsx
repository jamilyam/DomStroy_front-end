import React from 'react';
import Modal from "react-modal";
import Input from "../input/input";

const customStyles = {
  content : {
    position: 'fixed',
    top: '0px',
    bottom: '50%',
    transform: 'translate(0%, 50%)',
    maxWidth: '500px',
    padding : '20px',
    bgColor: 'lightgrey',
    margin: 'auto',
    height: '400px'
  }
};
class Popup extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      checkOutPopupIsVisible: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ checkOutPopupIsVisible: true });
  }

  handleCloseModal () {
    this.setState({ checkOutPopupIsVisible: false });
  }
  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Перейти к оформлению</button>
        <Modal
          isOpen={this.state.checkOutPopupIsVisible}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          style={customStyles}
        >
          <div className='form'>
            <Input title='Имя'/>
            <Input title='Пароль'/>
             <div className='buttons'>
               <button onClick={this.handleCloseModal}>Войти</button>
               <button onClick={this.handleCloseModal}>Закрыть</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default Popup;
