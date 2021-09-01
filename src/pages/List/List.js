import React, { Component } from 'react';
import ListCategoryBar from './ListCategoryBar';
import ListBeverageCard from './ListBeverageCard';

class List extends Component {
  constructor() {
    super();
    this.state = {
      beverageData: [],
    };
  }

  render() {
    return (
      <div className="list">
        <ListCategoryBar />
        <div className="listProductCard">
          {this.state.beverageData.map(product => (
            <ListBeverageCard
              key={product.id}
              img={product.img}
              name={product.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default List;
