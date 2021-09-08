import React, { Component } from 'react';
import Review from './Review';
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
          content: '여름에 이 만한 음료가 없죠!',
        },
        {
          id: 3,
          content: '전, 이 음료만 찾아요',
        },
      ],
      reviewContents: '',
    };
  }

  reviewInput = event => {
    this.setState({ reviewContents: event.target.value });
  };

  addReview = () => {
    this.setState({
      reviewList: [...this.state.reviewList, this.state.reviewContents],
    });
  };

  clickEvent = () => {
    this.addReview();
  };

  render() {
    return (
      <div className="detailReview">
        <h1>리뷰</h1>
        <div className="reviewList">
          <ul className="list">
            {this.state.reviewList.map(review => {
              const { id, content } = review;
              return <Review key={id} content={content} />;
            })}
            <dd>{this.props.content}</dd>
          </ul>
        </div>
        <div className="reviewWrite">
          <input
            className="reviewInput"
            type="text"
            placeholder="리뷰를 입력해주세요"
            onChange={this.reviewInput}
            value={this.state.reviewContents}
          />
          <button className="reviewClickBtn" onClick={this.clickEvent}>
            전송
          </button>
        </div>
      </div>
    );
  }
}

export default DetailReview;
