import React, { Component } from 'react';
import './Login.scss';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="title">webucks</div>
        <LoginForm />
        <footer className="forgotPW">
          <a
            className="forgetPwLink"
            href="https://www.starbucks.co.kr/mem/find_pwd1.do"
          >
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </div>
    );
  }
}

export default Login;
