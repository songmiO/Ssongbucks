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
        {
          id: 4,
          content: 'GH님이 사주신 쿨라임 아직 잊지못해요 ㅠㅠ',
        },
        {
          id: 5,
          content: '쿨~라임이 왜 쿨~라임이겠어요 COOL ~ 하자나요!!!',
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

  deleteReview = comment => {
    const review = this.state.reviewList.filter(
      content => content.id !== comment.id
    );
    this.setState({ reviewList: review });
  };

  render() {
    const { reviewList } = this.state;
    return (
      <div className="detailReview">
        <h1>리뷰</h1>
        <div className="reviewList">
          <ul className="list">
            {reviewList.map(id => (
              <li key={id}>
                {id.content}
                <button
                  className="deleteReviewBtn"
                  onClick={() => this.deleteReview(id)}
                >
                  삭제
                </button>
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
