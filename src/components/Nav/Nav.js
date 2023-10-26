import React from 'react';
import tabLogo from './AlcoholFreeLogo.png';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="tabheader">
        <div className="topLink">고객센터</div>
        <div className="topLink">마이페이지</div>
        <div className="topLink">관심상품</div>
        <div className="topLink">알림</div>
        <div className="topLink">로그인</div>
      </div>

      <div className="tab">
        <div className="tabLogoImage">
          <img src={tabLogo} alt="로고" />
        </div>

        <div className="tabBody">
          <div className="mainLink">HOME</div>
          <div className="mainLink">STYLE</div>
          <div className="mainLink">SHOP</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
