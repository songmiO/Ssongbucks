import React, { Component } from 'react';
import './DetailReview.scss';

class DetailReview extends Component {
  constructor() {
    super();
    this.state = {
      reviewList: [
        {
          id: 1,
          content: '쿨라임 너무 맛있어요!',
        },
        {
          id: 2,
          content: '전, 이 음료만 찾아요',
        },
        {
          id: 3,
          content: '여름에 이 만한 음료가 없죠!',
        },
      ],
      reviewContents: '',
    };
  }

  getTextValue = event => {
    this.setState({ reviewContents: event.currentTarget.value });
  };

  addReview = () => {
    this.setState(state => ({
      reviewList: [
        ...state.reviewList,
        {
          id: state.reviewList[state.reviewList.length - 1].id + 1,
          content: state.reviewContents,
        },
      ],
      reviewContents: '',
    }));
  };

  render() {
    const { reviewList } = this.state;
    return (
      <div className="detailReview">
        <h1>리뷰</h1>
        <div className="reviewList">
          <ul className="list">
            {reviewList.map((review, id) => (
              <li key={id} review={review}>
                {review.content}
              </li>
            ))}
          </ul>
        </div>
        <div className="reviewWrite">
          <input
            className="reviewInput"
            type="text"
            placeholder="리뷰를 입력해주세요"
            onChange={this.getTextValue}
            value={this.state.reviewContents}
          />
          <button className="reviewClickBtn" onClick={this.addReview}>
            전송
          </button>
        </div>
      </div>
    );
  }
}

export default DetailReview;
