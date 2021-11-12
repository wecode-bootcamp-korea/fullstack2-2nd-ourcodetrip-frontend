import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import { API_ENDPOINT } from '../../../../api';

const ManagingProfileSection = props => {
  const { name, email, isSmsAgreed, isEmailAgreed } = props.userData;
  const { isKakaoLinked, setIsKakaoLinked } = props;

  const KakaoLoginHandler = () => {
    setIsKakaoLinked(!isKakaoLinked);
    window.Kakao.Auth.login({
      scope: 'profile_nickname,profile_image,account_email',
      success: authObj => {
        const bearer = 'Bearer' + ' ' + authObj.access_token;
        fetch(`${API_ENDPOINT}/users/auth/kakao/link`, {
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
        <Editing>
          <Link to="/auth">
            <span>편집</span>
          </Link>
        </Editing>
        <Title>
          <img
            src="https://d2yoing0loi5gh.cloudfront.net/assets/default/user_profile_image-414acc60b27f0a258bec14c82b70dc361fc6768da9289f924f887bec1fc33849.png"
            alt="기본 사진"
          />
          <h1>{name}</h1>
        </Title>
        <Name>
          <div>이름</div>
          <span>{name}</span>
        </Name>
        <Email>
          <div>이메일</div>
          <span>{email}</span>
        </Email>
        <PhoneNumber>
          <div>연락처</div>
          <span>010-0123-9876</span>
        </PhoneNumber>
        <LinkedSns>
          <div>SNS 연동</div>
          <span>카카오 연동 </span>
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
            <span>email: {isEmailAgreed ? '수신 중' : '수신 거부'}</span>
            <span>sms: {isSmsAgreed ? '수신 중' : '수신 거부'}</span>
          </section>
        </MarketingOptIn>
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

export default ManagingProfileSection;

const ProfileMain = styled.div`
  ${({ theme }) => theme.flexColumnContainer};
  align-items: center;
  height: 700px;
  width: 780px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Editing = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  span {
    display: flex;
    margin: 30px 30px 0 0;
    padding: 10px 27px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    ${({ theme }) => theme.colors.black};
  }
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
    width: 127px;
    height: 27px;
  }

  span {
    width: 586px;
    height: 27px;
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
  align-items: flex-start;

  section {
    ${({ theme }) => theme.flexColumnContainer};
    justify-content: space-between;
    height: 50px;
  }
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
      ${({ theme }) => theme.flexCenterContainer};
      height: 15px;
      width: 600px;
      opacity: 0.3;
    }
  }
`;
