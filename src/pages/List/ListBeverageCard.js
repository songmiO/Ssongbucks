import React, { Component } from 'react';
import LikeBtn from '../Detail/LikeBtn';
import './ListBeverageCard.scss';

class ListBeverageCard extends Component {
  render() {
    return (
      <div className="listBeverageCard">
        <div className="beverageProductImage">
          <div className="productLikeBtn">
            <LikeBtn />
          </div>
          <img
            className="beverageProduct"
            src={this.props.img}
            alt="beverageImage"
          />
          <p className="beverageProductName">{this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default ListBeverageCard;
