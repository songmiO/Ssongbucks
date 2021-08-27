import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
    this.state = {
      beverageData: [],
    };
  }

  render() {
    return (
      <div className="List">
        {this.state.beverageData.map(product => (
          <ListBeverageCard
            key={product.id}
            img={product.img}
            name={product.name}
          />
        ))}
      </div>
    );
  }
}

export default List;
