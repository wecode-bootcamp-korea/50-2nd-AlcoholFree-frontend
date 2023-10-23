import React from 'react';
import './SignUp.scss';

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="container">
        <div className="pageTitle">회원 가입</div>

        <div className="emailInfo">
          <div className="label">이메일 주소</div>
          <input type="text" placeholder="이메일을 입력해주세요." />
        </div>

        <div className="passwordInfo">
          <div className="label">비밀번호</div>
          <input type="password" placeholder="비밀번호를 입력해주세요." />
        </div>

        <div className="passwordInfo">
          <div className="label">비밀번호 확인</div>
          <input type="password" placeholder="비밀번호를 입력해주세요." />
        </div>

        <div className="nameInfo">
          <div className="label">이름</div>
          <input type="text" placeholder="이름을 입력해주세요." />
        </div>

        <div className="numberInfo">
          <div className="label">전화번호</div>
          <div className="phoneNumber">
            <select className="preNumber">
              <option>010</option>
            </select>
            <input
              className="backNumber"
              type="text"
              placeholder="전화번호를 입력해주세요."
            />
          </div>
        </div>

        <div className="birthInfo">
          <div className="label">생년월일</div>
          <div className="birth">
            <select className="yearSelect">
              <option>년도</option>
            </select>

            <select className="monthSelect">
              <option>월</option>
            </select>

            <select className="daySelect">
              <option>일</option>
            </select>
          </div>
        </div>

        <div className="addressInfo">
          <div className="label">주소</div>
          <div className="address">
            <button className="addressBtn">우편번호 찾기</button>
            <input className="addressInput" />
          </div>
        </div>

        <button className="signUpBtn">가입하기</button>
      </div>
    </div>
  );
};

export default SignUp;
