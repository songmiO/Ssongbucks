import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import LoginTitle from './LoginTitle';
import LoginForm from './LoginForm';
import LoginForgotPw from './LoginForgotPw';
import Footer from '../../components/Footer/Footer';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <Nav />
        <div className="loginWrap">
          <div className="loginContainer">
            <LoginTitle />
            <LoginForm />
            <LoginForgotPw />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
