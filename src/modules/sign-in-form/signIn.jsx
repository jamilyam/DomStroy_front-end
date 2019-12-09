import React from 'react';
import './signIn.scss';
import Input from "../../components/input/input";

class SignInForm extends React.Component {
    render() {
        return(
          <div className='sign-up'>
              <div className='inner-form'>
                  <h3>Зарегистрироваться</h3>
                  <Input title='Имя'/>
                  <Input title='email'/>
                  <Input title='номер телефона'/>
                  <Input title='адресс доставки'/>

              </div>
          </div>
        )
    }

}

export default SignInForm;