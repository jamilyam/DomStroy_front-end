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
            maxWidth: '100px',
            maxHeight: '200px',
            backgroundColor: 'white',
          }}
        >
          <div className='close'
               onClick={() => {
               }}
          >x</div>
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