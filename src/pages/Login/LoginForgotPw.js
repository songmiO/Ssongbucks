import React, { Component } from 'react';
import './LoginForgotPw.scss';

class LoginForgotPw extends Component {
  render() {
    return (
      <div className="loginForgotPw">
        <footer className="forgotPw">
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

export default LoginForgotPw;
