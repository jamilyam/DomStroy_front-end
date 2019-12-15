import React from 'react';
import './sign-in-form.scss';
import Input from "../../components/input/input";
import Core from "../../components/core/core";

class SignInForm extends React.Component {
  render() {
    return(
      <Core>
        <div className='sign-up'>
          <div className='inner-form'>
            <h3>Зарегистрироваться</h3>
            <Input title='Имя'/>
            <Input title='email'/>
            <Input title='номер телефона'/>
            <Input title='адресс доставки'/>
          </div>
          <div className='sign-in-button'>
            <button onClick={()=>{}}
            >Зарегистрироваться</button>
          </div>
        </div>
      </Core>
    )
  }
}

export default SignInForm;