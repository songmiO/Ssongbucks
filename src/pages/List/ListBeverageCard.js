import React, { Component } from 'react';
import './ListBeverageCard.scss';

class ListBeverageCard extends Component {
  render() {
    return (
      <div className="listBeverageCard">
        <section className="beverageProductImage">
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
