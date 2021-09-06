import React, { Component } from 'react';

class Review extends Component {
  render() {
    return (
      <div className="review">
        <li className="reviewListContainer">
          <dd>{this.props.reviewContents}</dd>
        </li>
      </div>
    );
  }
}

export default Review;
