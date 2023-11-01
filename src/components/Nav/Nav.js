import React from 'react';
import { useNavigate } from 'react-router-dom';
import tabLogo from './AlcoholFreeLogo.png';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login');
  };

  const goHome = () => {
    navigate('/');
  };

  const goCart = () => {
    navigate('/cost');
  };

  return (
    <div className="nav">
      <div className="tabheader">
        <button className="topLink">고객센터</button>
        <button className="topLink">마이페이지</button>
        <button className="topLink">관심상품</button>
        <button className="topLink">알림</button>
        <button className="topLink" onClick={goLogin}>
          로그인
        </button>
      </div>

      <div className="tab">
        <div className="tabLogoImage">
          <img src={tabLogo} alt="로고" onClick={goHome} />
        </div>

        <div className="tabBody">
          <button className="mainLink" onClick={goHome}>
            SHOP
          </button>
          <button className="mainLink">TABLE</button>
          <button className="mainLink" onClick={goCart}>
            CART & PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
