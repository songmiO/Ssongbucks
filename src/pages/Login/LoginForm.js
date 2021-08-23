import React, { Component } from 'react';
import './LoginForm.scss';
class LoginForm extends Component {
  render() {
    return (
      <div>
        <form className="loginForm">
          <input
            className="loginId"
            type="text"
            placeholder="아이디를 입력해주세요."
          />
          <input
            className="loginPw"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <button className="loginBtn" type="button">
            로그인
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
