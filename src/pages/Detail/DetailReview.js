import React, { Component } from 'react';
import './DetailReview.scss';

class DetailReview extends Component {
  constructor() {
    super();
    this.state = {
      reviewList: [],
      reviewContents: '',
    };
  }

  reviewInput = event => {
    this.setState({ reviewContents: event.target.value });
  };

  addReview = () => {
    const addReviewText = this.state.reviewContents;

    this.setState({
      reviewList: [...this.state.reviewList, addReviewText],
      review: '',
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
            {this.state.reviewList.map(content => (
              <li>{content}</li>
            ))}
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
