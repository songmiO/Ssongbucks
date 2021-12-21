import React, { Component } from 'react';
import './DetailProductImage.scss';

class DetailProductImage extends Component {
  render() {
    return (
      <div className="detailProductImage">
        <img
          className="productBeverageImage"
          src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[107051]_20210419112152119.jpg"
          alt="ssongbucksBeverageImage"
        />
      </div>
    );
  }
}

export default DetailProductImage;
