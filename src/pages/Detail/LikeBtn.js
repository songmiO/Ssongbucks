import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import './LikeBtn.scss';

class LikeBtn extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  }

  click = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  render() {
    return (
      <div
        className={this.state.isClicked ? 'likeBtnActive' : ''}
        onClick={this.click}
      >
        <FontAwesomeIcon
          className="likeHeartIcon"
          icon={this.state.isClicked ? solidHeart : regularHeart}
        />
      </div>
    );
  }
}

export default LikeBtn;
