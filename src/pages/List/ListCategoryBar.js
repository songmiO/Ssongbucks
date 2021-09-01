import React, { Component } from 'react';

class ListCategoryBar extends Component {
  render() {
    return (
      <div className="listCategoryBar">
        <header className="beverageCategory">
          <p className="beverageCategoryTitle">티(티바나)</p>
          <img
            className="beverageCategoryIcon"
            src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
            alt="beverageCategoryIcon"
          ></img>
          <p className="beverageCategoryExplain">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </p>
        </header>
      </div>
    );
  }
}

export default ListCategoryBar;
