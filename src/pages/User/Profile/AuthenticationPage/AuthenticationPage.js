import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useState } from 'react';

const AuthenticationPage = () => {
  const history = useHistory();
  const [password, setPassword] = useState('');

  const handleInputPassword = e => {
    setPassword(e.target.value);
  };

  const KakaoLoginHandler = () => {
    window.Kakao.Auth.login({
      scope: 'profile_nickname,profile_image,account_email',
      success: authObj => {
        const bearer = 'Bearer' + ' ' + authObj.access_token;
        fetch('http://localhost:8001/users/auth/kakao', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: bearer,
          },
        })
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
          });
      },
      fail: err => {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <AuthenticationPageWrapper>
      <TitleContainer>
        <h1>프로필 편집</h1>
        <span>
          여행자님의 소중한 개인정보를 안전하게 보호하기 위해
          <br />
          다시 한번 인증해주세요
        </span>
      </TitleContainer>
      <AuthenticationPageForm>
        <KakaoLoginButton
          onClick={() => {
            KakaoLoginHandler();
            history.push('/edit');
          }}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxwYXRoIGZpbGw9IiMzODFFMUYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkgNEM1LjY4NiA0IDMgNi4xMjQgMyA4Ljc0M2MwIDEuNzA1IDEuMTM4IDMuMiAyLjg0NiA0LjAzNi0uMTI1LjQ2OC0uNDU0IDEuNjk3LS41MiAxLjk2LS4wODEuMzI2LjEyLjMyMi4yNTEuMjM0LjEwNC0uMDY4IDEuNjQ0LTEuMTE2IDIuMzEtMS41NjguMzYuMDUzLjczMi4wODIgMS4xMTMuMDgyIDMuMzE0IDAgNi0yLjEyNCA2LTQuNzQ0QzE1IDYuMTIzIDEyLjMxNCA0IDkgNCIvPgo8L3N2Zz4KCg=="
            alt="kakao logo"
          />
          카카오로 인증하기
        </KakaoLoginButton>
        <DividedLine>
          <div>또는</div>
        </DividedLine>
        <PasswordContainer>
          <h1>비밀번호</h1>
          <input
            placeholder="비밀번호를 입력해주세요"
            onChange={handleInputPassword}
          />
          {password && alert('왜 그러세요..')}
          <button>비밀번호 인증</button>
        </PasswordContainer>
      </AuthenticationPageForm>
    </AuthenticationPageWrapper>
  );
};

export default AuthenticationPage;

const AuthenticationPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto;
  height: 80px;
  width: 430px;

  h1 {
    font-size: 24px;
    font-weight: 600;
  }

  span {
    display: flex;
    align-items: flex-end;
    height: 40px;
    text-align: center;
    line-height: 18px;
    font-size: 13px;
    color: #848c94;
    letter-spacing: 1px;
  }
`;

const AuthenticationPageForm = styled.div`
  width: 430px;
  height: 400px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const KakaoLoginButton = styled.button`
  margin: 60px auto;
  height: 60px;
  width: 332px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 600;
  font-size: 20px;
  background-color: #fee500;

  img {
    margin-right: 7px;
    height: 20px;
    width: 20px;
  }
`;

const DividedLine = styled.div`
  div {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: rgba(0, 0, 0, 0.35);
    font-size: 14px;
    margin: 8px 0px;

    ::before,
    ::after {
      content: '';
      flex-grow: 1;
      background: rgba(0, 0, 0, 0.35);
      height: 1px;
      margin: 0px 16px;
    }
  }
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  padding-left: 40px;

  h1 {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 7px;
    font-size: 16px;
  }

  input {
    padding: 0 10px;
    height: 48px;
    width: 332px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
  button {
    margin-top: 7px;
    height: 48px;
    width: 332px;
    border-radius: 10px;
    border: none;
    background-color: #b2dffc;
    font-size: 15px;
    font-weight: 800;
    color: #ffffff;
  }
`;
