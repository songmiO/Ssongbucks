import React, { Component } from 'react';
import './ListCategoryBar.scss';

class ListCategoryBar extends Component {
  render() {
    return (
      <header className="listCategoryBar">
        <p className="listCategoryTitle">티(티바나)</p>
        <img
          className="listCategoryIcon"
          src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
          alt="beverageCategoryIcon"
        ></img>
        <p className="listCategoryExplain">
          디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </p>
      </header>
    );
  }
}

export default ListCategoryBar;
