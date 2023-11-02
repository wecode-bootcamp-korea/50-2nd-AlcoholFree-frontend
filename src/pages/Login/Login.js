import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './logo.png';
import URL from '../../config';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const setChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const goToSignUp = () => {
    navigate('/sign-up');
  };

  const loginWeb = () => {
    fetch(`${URL.Login}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'login_success') {
          localStorage.setItem('TOKEN', data.accessToken);
          navigate('/');
        } else if (data.message === 'USER_NOT_FOUND') {
          alert(
            '가입되지 않은 이메일입니다.\n회원 가입 혹은 이메일을 확인해주세요.',
          ); // 없는 이메일로 로그인 시도 시 회원 가입 혹은 이메일 확인 권유 알림
        } else if (data.message === '로그인 정보 불일치!') {
          alert('비밀번호가 틀렸습니다.'); // 비밀번호가 틀렸음을 알림
        }
      });
  };

  const isUserInputValid =
    email.includes('@') && password.length >= 10 && email.includes('.');

  const enterKeyPress = (event) => {
    if (event.key === 'Enter' && isUserInputValid) {
      loginWeb();
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="splash">
          <img src={Logo} alt="로고" />
        </div>

        <div className="basicInfo">
          <div className="label">이메일 주소</div>
          <input
            type="text"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={setChangeEmail}
            onKeyPress={enterKeyPress}
          />
        </div>

        <div className="basicInfo">
          <div className="label">비밀번호</div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={setChangePassword}
            onKeyPress={enterKeyPress}
          />
        </div>

        <button
          className={`loginBtn${isUserInputValid ? 'Access' : ''}`}
          disabled={!isUserInputValid}
          onClick={loginWeb}
        >
          로그인
        </button>

        <div className="loginOption">
          <button onClick={goToSignUp}>이메일 가입</button>
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
