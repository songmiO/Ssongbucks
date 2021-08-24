import React, { Component } from 'react';
import LoginTitle from './LoginTitle';
import LoginForm from './LoginForm';
import LoginForgotPw from './LoginForgotPw';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <LoginTitle />
        <LoginForm />
        <LoginForgotPw />
      </div>
    );
  }
}

export default Login;
