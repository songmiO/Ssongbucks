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
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  loginBtnChange = () => {
    if (this.state.id.includes('@') && this.state.pw.length > 4) {
      this.setState({ isBtnActive: true });
    } else {
      this.setState({ isBtnActive: false });
    }
  };

  goMain = () => {
    this.props.history.push('/main');
  };

  render() {
    return (
      <div className="loginForm">
        <form className="loginInput">
          <input
            className="loginId"
            type="text"
            placeholder="아이디 또는 이메일을 입력해주세요."
            onChange={this.handleInput}
            onKeyUp={this.loginBtnChange}
          />
          <input
            className="loginPw"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={this.handleInput}
            onKeyUp={this.loginBtnChange}
          />
          <button
            className={
              this.state.isBtnActive ? 'loginBtnActive' : 'loginBtnDisactive'
            }
            className="loginBtn"
            type="button"
            onClick={this.goMain}
          >
            로그인
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
