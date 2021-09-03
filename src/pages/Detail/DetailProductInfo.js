import React, { Component } from 'react';
import LikeBtn from './LikeBtn';
import './DetailProductInfo.scss';

class DetailProductInfo extends Component {
  render() {
    return (
      <div className="productInfo">
        <div className="productMainInfo">
          <h1>쿨 라임 피지오</h1>
          <div className="productLikeBtn">
            <LikeBtn />
          </div>
          <h2>Cool Lime Starbucks Fizzio™</h2>
          <div className="productExplain">
            <p>
              그린 빈 추출액이 들어간 라임 베이스에 건조된 라임 슬라이스를 넣고
              스파클링한 시원하고 청량감 있는 음료입니다. (카페인이 함유된
              탄산음료입니다)
            </p>
          </div>
        </div>
        <div className="productSubInfo">
          <p>제품 영양 정보</p>
          <p>Tall(톨) / 355ml (12 fl oz)</p>
        </div>
        <div className="productNutritionContents">
          <ul className="essentialNutritionWrap">
            <li className="kcal">
              <dl>
                <dt>1회 제공량 (kcal)</dt>
                <dd>105</dd>
              </dl>
            </li>
            <li className="satFat">
              <dl>
                <dt>포화지방 (g)</dt>
                <dd>0</dd>
              </dl>
            </li>
            <li className="protein">
              <dl>
                <dt>단백질 (g)</dt>
                <dd>0</dd>
              </dl>
            </li>
          </ul>
          <ul className="nutritionWrap">
            <li className="sodium">
              <dl>
                <dt>나트륨 (mg)</dt>
                <dd>20</dd>
              </dl>
            </li>
            <li className="sugars">
              <dl>
                <dt>당류 (g)</dt>
                <dd>26</dd>
              </dl>
            </li>
            <li className="caffein">
              <dl>
                <dt>카페인 (mg)</dt>
                <dd>110</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DetailProductInfo;
