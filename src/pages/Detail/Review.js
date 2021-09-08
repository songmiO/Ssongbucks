import React, { Component } from 'react';
import './Review.scss';

class Review extends Component {
  render() {
    return (
      <div className="review">
        <li className="reviewListContainer">
          <dd>{this.props.content}</dd>
        </li>
      </div>
    );
  }
}

export default Review;
