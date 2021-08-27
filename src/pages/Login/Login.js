import React, { Component } from 'react';
import LoginTitle from './LoginTitle';
import LoginForm from './LoginForm';
import LoginForgotPw from './LoginForgotPw';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="loginContainer">
          <LoginTitle />
          <LoginForm />
          <LoginForgotPw />
        </div>
      </div>
    );
  }
}

export default Login;
