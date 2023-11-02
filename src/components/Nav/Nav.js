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
    if (localStorage.length === 1) {
      navigate('/');
    } else {
      return alert('로그인을 해주세요.');
    }
  };

  const goCart = () => {
    if (localStorage.length === 1) {
      navigate('/cost');
    } else {
      return alert('로그인을 해주세요.');
    }
  };

  const logOut = () => {
    localStorage.removeItem('TOKEN');
    navigate('/login');
  };

  const isLogin = () => {
    return localStorage.length === 1;
  };

  return (
    <div className="nav">
      <div className="tabheader">
        <button className="topLink">고객센터</button>
        <button className="topLink">마이페이지</button>
        <button className="topLink">관심상품</button>
        <button className="topLink">알림</button>
        <button className="topLink" onClick={isLogin() ? logOut : goLogin}>
          {isLogin() ? '로그아웃' : '로그인'}
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
