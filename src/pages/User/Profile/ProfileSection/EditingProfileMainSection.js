import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Switch from '@mui/material/Switch';

const EditingProfileMainSection = props => {
  const history = useHistory();
  const { name, email, phoneNumber } = props.userData;
  const {
    checkedEmail,
    checkedSms,
    handleEmailChecked,
    handleSmsChecked,
    isKakaoLinked,
    setIsKakaoLinked,
  } = props;
  const [inputName, setInputName] = useState(name);

  const handleInputName = e => {
    setInputName(e.target.value);
  };

  const handleCancle = () => {
    history.push('/');
  };

  const handleSave = () => {
    fetch('http://localhost:8001/users/profile/', {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputName,
        checkedEmail,
        checkedSms,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  const KakaoLoginHandler = () => {
    setIsKakaoLinked(!isKakaoLinked);
    window.Kakao.Auth.login({
      scope: 'profile_nickname,profile_image,account_email',
      success: authObj => {
        const bearer = 'Bearer' + ' ' + authObj.access_token;
        fetch('http://localhost:8001/users/auth/kakao/link', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: bearer,
          },
          body: JSON.stringify({ isKakaoLinked: !isKakaoLinked }),
        })
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
          });
      },
      fail: err => {
        alert(JSON.parse(err));
      },
    });
  };
  return (
    <div>
      <ProfileMain>
        <Title>
          <img
            src="https://d2yoing0loi5gh.cloudfront.net/assets/default/user_profile_image-414acc60b27f0a258bec14c82b70dc361fc6768da9289f924f887bec1fc33849.png"
            alt="기본 사진"
          />
          <h1>{name}</h1>
        </Title>
        <Name>
          <div>이름</div>
          <input
            defaultValue={name}
            checked={inputName}
            onChange={handleInputName}
          />
        </Name>
        <Email>
          <div>이메일</div>
          <span>{email}</span>
        </Email>
        <PhoneNumber>
          <div>연락처</div>
          <span>{phoneNumber}</span>
        </PhoneNumber>
        <LinkedSns>
          <div>SNS 연동</div>
          <span>카카오 연동</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Switch
            checked={isKakaoLinked}
            inputProps={{ 'aria-label': 'controlled' }}
            onClick={() => {
              KakaoLoginHandler();
            }}
          />
        </LinkedSns>
        <Password>
          <div>비밀번호</div>
          <span>*********</span>
        </Password>
        <MarketingOptIn>
          <div>마케팅 수신동의</div>
          <section>
            <span>
              email &nbsp;&nbsp;&nbsp;
              <EmailOptInButton>
                <input
                  type="radio"
                  name="emailAgreedradio"
                  defaultValue="emailAgreed"
                  checked={checkedEmail}
                  onChange={handleEmailChecked}
                />
                &nbsp;수신
              </EmailOptInButton>
              <EmailOptOutButton>
                <input
                  type="radio"
                  name="emailDisAgreedradio"
                  defaultValue="emailDisAgreed"
                  checked={!checkedEmail}
                  onChange={handleEmailChecked}
                />
                &nbsp;수신거부
              </EmailOptOutButton>
            </span>
            <span>
              sms &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SmsOptInButton>
                <input
                  type="radio"
                  name="smsAgreedradio"
                  defaultValue="smsAgreed"
                  checked={checkedSms}
                  onChange={handleSmsChecked}
                />
                &nbsp;수신
              </SmsOptInButton>
              <SmsOptOutButton>
                <input
                  type="radio"
                  name="smsDisAgreedRadio"
                  defaultValue="smsDisAgreed"
                  checked={!checkedSms}
                  onChange={handleSmsChecked}
                />
                &nbsp;수신거부
              </SmsOptOutButton>
            </span>
          </section>
        </MarketingOptIn>
        <section>
          <CancelButton onClick={handleCancle}>취소하기</CancelButton>
          <SaveButton
            onClick={() => {
              handleSave();
              history.push('/profile');
            }}
          >
            저장하기
          </SaveButton>
        </section>
      </ProfileMain>
      <AccountManagement>
        <h1>계좌관리</h1>
        <div>
          <h3>환불계좌</h3>
          <span>등록된 계좌가 없습니다.</span>
        </div>
      </AccountManagement>
    </div>
  );
};

export default EditingProfileMainSection;

const ProfileMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 770px;
  width: 780px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  margin: 30px auto;
  height: 140px;
  text-align: center;

  img {
    margin-bottom: 17px;
    height: 100px;
    width: 100px;
  }
`;

const Name = styled.div`
  display: flex;
  margin: 15px auto;
  padding-left: 30px;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    width: 127px;
    height: 27px;
  }

  span {
    width: 586px;
    height: 27px;
  }
  input {
    padding-left: 7px;
    font-size: 15px;
  }
`;

const Email = styled(Name)``;

const PhoneNumber = styled(Name)``;

const LinkedSns = styled.div`
  display: flex;
  align-items: center;
  margin: 15px auto;
  padding-left: 30px;
  width: 100%;

  div {
    width: 127px;
  }
`;

const Password = styled(Name)``;

const MarketingOptIn = styled(LinkedSns)`
  padding-bottom: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  div {
    padding-bottom: 60px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80px;
  }
`;

const EmailOptInButton = styled.label`
  margin-right: 10px;
  font-size: 1rem;
`;

const EmailOptOutButton = styled.label`
  font-size: 1rem; ;
`;

const SmsOptInButton = styled.label`
  margin-right: 10px;
  font-size: 1rem;
`;

const SmsOptOutButton = styled.label`
  font-size: 1rem;
`;

const CancelButton = styled.button`
  margin-right: 10px;
  height: 40px;
  width: 350px;
  border: none;
  border-radius: 10px;
  background-color: #e9ecef;
  color: white;
  font-size: 15px;
  font-weight: 600;
`;
const SaveButton = styled(CancelButton)`
  background-color: #51abf3;
`;

const AccountManagement = styled(ProfileMain)`
  margin-top: 15px;
  padding: 30px;
  height: 160px;
  h1 {
    width: 100%;
    font-size: 24px;
    font-weight: 600;
  }
  div {
    display: flex;
    margin-top: 35px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding-bottom: 25px;
    h3 {
      height: 15px;
      width: 70px;
    }
    span {
      display: flex;
      justify-content: center;
      height: 15px;
      width: 600px;
      opacity: 0.3;
    }
  }
`;
