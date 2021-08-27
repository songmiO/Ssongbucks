import React, { Component } from 'react';
import './ListBeverageCard';

class ListBeverageCard extends Component {
  render() {
    return (
      <div className="listBeverageCard">
        <section className="beverageProductImage">
          <img className="beverageProduct" src={this.props.img} />
          <p className="beverageProductName">{this.props.name}</p>
        </section>
      </div>
    );
  }
}

export default ListBeverageCard;
