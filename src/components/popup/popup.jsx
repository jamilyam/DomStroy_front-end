import React from 'react';
import Modal from "react-modal";
import Input from "../input/input";

class Popup extends React.Component{

  render() {
    return(
      <div className='pop-up'>
        <Modal
          isOpen={this.props.isOpen}
          style={{
            width: '200px',
            height: '300px',
            backgroundColor: 'white',
          }}
        >
          <Input title='Имя'/>
          <Input title='email'/>
          <button onClick={()=>{}}
          >Войти</button>
        </Modal>
      </div>
    )
  }
}

export default Popup;