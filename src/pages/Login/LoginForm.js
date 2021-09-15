import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      isBtnActive: false,
    };
  }

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  goList = () => {
    this.props.history.push('/list');
  };

  render() {
    const isLoginBtnActive =
      this.state.id.includes('@') && this.state.pw.length > 4;
    return (
      <div className="loginForm">
        <form className="loginInput">
          <input
            className="loginId"
            type="text"
            name="id"
            placeholder="아이디 또는 이메일을 입력해주세요."
            onChange={this.handleInput}
          />
          <input
            className="loginPw"
            type="password"
            name="pw"
            placeholder="비밀번호를 입력해주세요."
            onChange={this.handleInput}
          />
          <button
            className={
              isLoginBtnActive ? 'loginBtn loginBtnActive' : 'loginBtn'
            }
            type="button"
            onClick={this.goList}
          >
            로그인
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
