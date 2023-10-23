import React from 'react';
import './Login.scss';
import Logo from './logo.png';

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="splash">
          <img src={Logo} alt="로고" />
        </div>

        <div className="basicInfo">
          <div className="label">이메일 주소</div>
          <input type="text" placeholder="이메일을 입력해주세요." />
        </div>

        <div className="basicInfo">
          <div className="label">비밀번호</div>
          <input type="password" placeholder="비밀번호를 입력해주세요." />
        </div>

        <button className="loginBtn">로그인</button>

        <div className="loginOption">
          <button>이메일 가입</button>
          <div>|</div>
          <button>이메일 찾기</button>
          <div>|</div>
          <button>비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
