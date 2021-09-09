import React, { Component } from 'react';

import './ListBeverageCard.scss';

class ListBeverageCard extends Component {
  render() {
    return (
      <div className="listBeverageCard">
        <div className="beverageProductImage">
          <div className="productLikeBtn">
          <
          </div>
          <img
            className="beverageProduct"
            src={this.props.img}
            alt="beverageImage"
          />
          <p className="beverageProductName">{this.props.name}</p>
        </section>
      </div>
    );
  }
}

export default ListBeverageCard;
