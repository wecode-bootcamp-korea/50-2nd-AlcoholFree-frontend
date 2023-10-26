import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../../components/Post/Post';
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

  const setChangeEmail = (event) => {
    setUserInput({
      ...userInput,
      email: event.target.value,
    });
  };

  const setChangePassword = (event) => {
    setUserInput({
      ...userInput,
      password: event.target.value,
    });
  };

  const setChangePasswordVerify = (event) => {
    setUserInput({
      ...userInput,
      passwordVerify: event.target.value,
    });
  };

  const setChangeName = (event) => {
    setUserInput({
      ...userInput,
      name: event.target.value,
    });
  };

  const setChangeMobile = (event) => {
    setUserInput({
      ...userInput,
      mobile: event.target.value,
    });
  };

  const setChangeBirthyear = (event) => {
    setUserInput({
      ...userInput,
      birthyear: event.target.value,
    });
  };

  const setChangeBirthmonth = (event) => {
    setUserInput({
      ...userInput,
      birthmonth: event.target.value,
    });
  };

  const setChangeBirthday = (event) => {
    setUserInput({
      ...userInput,
      birthday: event.target.value,
    });
  };

  const setChangeAddressDetail = (event) => {
    setUserInput({
      ...userInput,
      addressDetail: event.target.value,
    });
  };

  const setChangeAddress = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
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
      fetch('http://10.58.52.64:8000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email: userInput.email,
          password: userInput.password,
          name: userInput.name,
          birthDay: `${userInput.birthyear}-${userInput.birthmonth}-${userInput.birthday}`,
          phoneNumber: userInput.mobile,
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
      <div className="container">
        <div className="pageTitle">회원 가입</div>

        <div className="emailInfo">
          <div className="label">이메일 주소</div>
          <input
            type="text"
            placeholder="이메일을 입력해주세요."
            onChange={setChangeEmail}
            value={userInput.email}
          />
        </div>

        <div className="passwordInfo">
          <div className="label">비밀번호</div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={setChangePassword}
            value={userInput.password}
          />
        </div>

        <div className="passwordInfo">
          <div className="label">비밀번호 확인</div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={setChangePasswordVerify}
            value={userInput.passwordVerify}
          />
        </div>

        <div className="nameInfo">
          <div className="label">이름</div>
          <input
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={setChangeName}
            value={userInput.name}
          />
        </div>

        <div className="numberInfo">
          <div className="label">전화번호</div>
          <div className="phoneNumber">
            {/* <select className="preNumber">
              <option>010</option>
            </select> */}
            <input
              className="backNumber"
              type="text"
              placeholder="전화번호를 입력해주세요."
              onChange={setChangeMobile}
              value={userInput.mobile}
            />
          </div>
        </div>

        <div className="birthInfo">
          <div className="label">생년월일</div>
          <div className="birth">
            <input
              type="text"
              className="yearSelect"
              placeholder="년도"
              onChange={setChangeBirthyear}
              value={userInput.birthyear}
            />
            <input
              type="text"
              className="monthSelect"
              placeholder="월"
              onChange={setChangeBirthmonth}
              value={
                userInput.birthmonth.length === 1
                  ? '0' + userInput.birthmonth
                  : userInput.birthmonth
              }
            />
            <input
              type="text"
              className="daySelect"
              placeholder="일"
              onChange={setChangeBirthday}
              value={
                userInput.birthday.length === 1
                  ? '0' + userInput.birthday
                  : userInput.birthday
              }
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
              onChange={setChangeAddress}
              value={userInput.address}
              required={true}
              name="address"
              placeholder="주소"
            />
            <input
              className="addressDetailInput"
              type="text"
              onChange={setChangeAddressDetail}
              placeholder="상세주소"
              value={userInput.addressDetail}
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
