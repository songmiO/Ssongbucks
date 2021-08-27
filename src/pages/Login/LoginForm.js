import React, { Component } from 'react';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      loginIdValue: '',
      loginPwValue: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      loginIdValue: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      loginPwValue: event.target.value,
    });
  };

  login = () => {
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.loginIdValue,
        password: this.state.loginPwValue,
      }),
    }).then(response => response.json());
  };

  render() {
    return (
      <div className="loginForm">
        <form className="loginInput">
          <input
            className="loginId"
            type="text"
            placeholder="아이디를 입력해주세요."
            onChange={this.handleIdInput}
          />
          <input
            className="loginPw"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={this.handlePwInput}
          />
          <button
            className={
              this.state.loginIdValue.includes('@') &&
              this.state.loginPwValue.length > 4
                ? 'loginBtn loginBtnActive'
                : 'loginBtn'
            }
            className="loginBtn"
            type="button"
            onClick={this.login}
          >
            로그인
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
