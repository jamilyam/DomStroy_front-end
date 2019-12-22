import React from 'react';
import Modal from "react-modal";
import Input from "../input/input";

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '50%',
    transform: 'translate(50%, 50%)',
    maxWidth: '400px',
    padding : '20px'
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
               onClick={() => this.state.checkOutPopupIsVisible(false)}
          >x</div>
          <div className='form'>
            <Input title='Имя'/>
            <Input title='Пароль'/>
            <div>
            <button onClick={()=>{}}
            >Войти</button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Popup;
//
// constructor(){//do stuff here}
//   componentDidMount(){
//     let visited = localStorage["alreadyVisited"];
//     if(visited) {
//       this.setState({ viewPopup: false })
//       //do not view Popup
//     } else {
//       //this is the first time
//       localStorage["alreadyVisited"] = true;
//       this.setState({ viewPopup: true});
//     }
//     render() {
//       return(<Modal
//         aria-labelledby='modal-label'
//         autoFocus={false}
//         style={modalStyle}
//         backdropStyle={backdropStyle}
//         show={this.state.viewPopup}
//         onHide={this.close}>
//         <div style={dialogStyle()} >
//           I'm the Popup Text
//         </div>
//       </Modal>);
//     }