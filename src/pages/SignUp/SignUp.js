import React, { useState } from 'react';
import './SignUp.scss';
import { useNavigate } from 'react-router-dom';
import Post from '../../components/Post/Post';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [birthyear, setBirthyear] = useState('');
  const [birthmonth, setBirthmonth] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');

  const setChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const setChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const setChangePasswordVerify = (event) => {
    setPasswordVerify(event.target.value);
  };

  const setChangeName = (event) => {
    setName(event.target.value);
  };

  const setChangeMobile = (event) => {
    setMobile(event.target.value);
  };

  const setChangeBirthyear = (event) => {
    setBirthyear(event.target.value);
  };

  const setChangeBirthmonth = (event) => {
    setBirthmonth(event.target.value);
  };

  const setChangeBirthday = (event) => {
    setBirthday(event.target.value);
  };

  const setChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const [enroll_company, setEnroll_company] = useState({
    address: '',
  });

  const [popup, setPopup] = useState(false);

  const handleInput = (event) => {
    setEnroll_company({
      ...enroll_company,
      [event.target.name]: event.target.value,
    });
  };

  const handleComplete = (data) => {
    setPopup(!popup);
  };

  const signUp = () => {
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      alert('이메일 형식이 아닙니다.');
    } else if (password !== passwordVerify) {
      alert('비밀번호가 다릅니다.');
    } else if (password.length < 10) {
      alert('비밀번호는 10자리 이상으로 설정해주세요.');
    } else {
      fetch('http://10.58.52.64:8000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
          birthDay: `${birthyear}-${birthmonth}-${birthday}`,
          phoneNumber: mobile,
          address: enroll_company.address + ' ' + address,
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
            value={email}
          />
        </div>

        <div className="passwordInfo">
          <div className="label">비밀번호</div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={setChangePassword}
            value={password}
          />
        </div>

        <div className="passwordInfo">
          <div className="label">비밀번호 확인</div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={setChangePasswordVerify}
            value={passwordVerify}
          />
        </div>

        <div className="nameInfo">
          <div className="label">이름</div>
          <input
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={setChangeName}
            value={name}
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
              value={mobile}
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
              value={birthyear}
            />
            <input
              type="text"
              className="monthSelect"
              placeholder="월"
              onChange={setChangeBirthmonth}
              value={birthmonth}
            />
            <input
              type="text"
              className="daySelect"
              placeholder="일"
              onChange={setChangeBirthday}
              value={birthday}
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
              onChange={handleInput}
              value={enroll_company.address}
              required={true}
              name="address"
              placeholder="주소"
            />
            <input
              className="addressDetailInput"
              type="text"
              onChange={setChangeAddress}
              placeholder="상세주소"
              value={address}
            />
          </div>
        </div>

        <button className="signUpBtn" onClick={signUp}>
          가입하기
        </button>
      </div>
      {popup && (
        <Post company={enroll_company} setcompany={setEnroll_company} />
      )}
    </div>
  );
};

export default SignUp;
