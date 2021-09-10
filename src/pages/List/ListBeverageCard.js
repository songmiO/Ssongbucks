import React, { Component } from 'react';
import { withRouter } from 'react-router';
import LikeBtn from '../Detail/LikeBtn';
import './ListBeverageCard.scss';

class ListBeverageCard extends Component {
  showDetail = () => {
    this.props.history.push(`/detail/${this.props.id}`);
  };

  render() {
    return (
      <div className="listBeverageCard">
        <div className="beverageProductImage">
          <div className="productLikeBtn">
            <LikeBtn />
          </div>
          <div className="beverageProductCard" onClick={this.showDetail}>
            <img
              className="beverageProduct"
              src={this.props.img}
              alt="beverageImage"
            />
            <p className="beverageProductName">{this.props.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ListBeverageCard);
