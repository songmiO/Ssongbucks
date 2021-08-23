import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form className="loginForm">
          <input
            className="loginId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input className="loginPw" type="password" placeholder="비밀번호" />
          <button className="loginBtn" type="button">
            로그인
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
