import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import DetailProductName from './DetailProductName';
import DetailProductImage from './DetailProductImage';
import DetailProductInfo from './DetailProductInfo';
import DetailReview from './DetailReview';
import Footer from '../../components/Footer/Footer';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <Nav />
        <DetailProductName />
        <div className="productImageWrap">
          <DetailProductImage />
          <div className="productContents">
            <DetailProductInfo />
            <DetailReview />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Detail;
