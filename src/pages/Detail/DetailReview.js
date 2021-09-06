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
    this.setState({ reviewList: event.target.value });
  };

  addReview = () => {
    const addContent = this.state.reviewList;
    addContent.push(this.state.reviewContents);

    this.setState({
      review: this.state.reviewList,
      reviewContents: '',
    });
  };

  clickEvent = () => {
    this.addReview();
  };

  enterEvent = () => {
    this.addReview();
  };

  render() {
    return (
      <div className="detailReview">
        <h1>리뷰</h1>
        <div className="reviewList">
          <ul className="list">
            {this.state.reviewList.map(content => (
              <li>(쿨라임 피지오 너무 맛있어요!)</li>
            ))}
          </ul>
        </div>
        <div className="reviewWrite">
          <input
            className="reviewInput"
            type="text"
            name="review"
            placeholder="리뷰를 입력해주세요"
            onChange={this.reviewInput}
            onKeyPress={this.enterEvent}
            value={this.state.reviewContents}
          />
        </div>
      </div>
    );
  }
}

export default DetailReview;
