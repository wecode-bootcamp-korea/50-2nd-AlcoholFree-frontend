import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../../components/Post/Post';
import URL from '../../config';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
    passwordVerify: '',
    name: '',
    mobile: '',
    birthyear: '',
    birthmonth: '',
    birthday: '',
    address: '',
    addressDetail: '',
  });

  const setChangeUserInput = (event) => {
    const newUserInput = {
      ...userInput,
      [event.target.name]: event.target.value,
    };
    setUserInput(newUserInput);
  };

  const [popup, setPopup] = useState(false);

  const handleComplete = (data) => {
    setPopup(!popup);
  };

  const signUp = () => {
    if (!userInput.email.includes('@') || !userInput.email.indexOf('.')) {
      alert('이메일 형식이 아닙니다.');
    } else if (userInput.password !== userInput.passwordVerify) {
      alert('비밀번호가 다릅니다.');
    } else if (userInput.password.length < 10) {
      alert('비밀번호는 10자리 이상으로 설정해주세요.');
    } else {
      fetch(`${URL.SignUp}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email: userInput.email,
          password: userInput.password,
          name: userInput.name,
          birthDay: `${userInput.birthyear}-${userInput.birthmonth}-${userInput.birthday}`,
          phoneNumber: `${userInput.mobile.replace(
            /(\d{3})(\d{4})(\d{4})/,
            '$1-$2-$3',
          )}`,
          address: userInput.address + ' ' + userInput.addressDetail,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === 'created_success') {
            alert('회원가입이 완료되었습니다.');
            navigate('/login');
          }
        });
    }
  };

  return (
    <div className="signUp">
      <div className="container" onChange={setChangeUserInput}>
        <div className="pageTitle">회원 가입</div>

        <div className="info email">
          <div className="label">이메일 주소</div>
          <input
            type="text"
            placeholder="이메일을 입력해주세요."
            value={userInput.email}
            name="email"
          />
        </div>

        <div className="info password">
          <div className="label">비밀번호</div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={userInput.password}
            name="password"
          />
        </div>

        <div className="info password">
          <div className="label">비밀번호 확인</div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={userInput.passwordVerify}
            name="passwordVerify"
          />
        </div>

        <div className="info name">
          <div className="label">이름</div>
          <input
            type="text"
            placeholder="이름을 입력해주세요."
            value={userInput.name}
            name="name"
          />
        </div>

        <div className="info number">
          <div className="label">전화번호</div>
          <input
            className="backNumber"
            type="text"
            placeholder="전화번호를 입력해주세요."
            value={userInput.mobile}
            name="mobile"
          />
        </div>

        <div className="birthInfo">
          <div className="label">생년월일</div>
          <div className="birth">
            <input
              type="text"
              className="yearSelect"
              placeholder="년도"
              value={userInput.birthyear}
              name="birthyear"
            />
            <input
              type="text"
              className="monthSelect"
              placeholder="월"
              value={userInput.birthmonth}
              name="birthmonth"
            />
            <input
              type="text"
              className="daySelect"
              placeholder="일"
              value={userInput.birthday}
              name="birthday"
            />
          </div>
        </div>

        <div className="addressInfo">
          <div className="label">주소</div>
          <div className="address">
            <button className="addressBtn" onClick={handleComplete}>
              우편번호 찾기
            </button>
            <input
              className="addressInput"
              type="text"
              value={userInput.address}
              required={true}
              name="address"
              placeholder="주소"
            />
            <input
              className="addressInput detail"
              type="text"
              placeholder="상세주소"
              value={userInput.addressDetail}
              name="addressDetail"
            />
          </div>
        </div>

        <button className="signUpBtn" onClick={signUp}>
          가입하기
        </button>
      </div>
      {popup && <Post company={userInput} setCompany={setUserInput} />}
    </div>
  );
};

export default SignUp;
