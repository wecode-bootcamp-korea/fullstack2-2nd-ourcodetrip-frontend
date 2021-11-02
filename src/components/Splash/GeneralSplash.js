import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const GeneralSplash = () => {
  const {
    location: { pathname },
  } = useHistory();

  const selectMention = () => {
    switch (pathname) {
      case '/':
        return '메인 페이지로 이동합니다';
      case '/tourticket':
        return '투어티켓 페이지로 이동합니다';
      default:
        return '반갑습니다';
    }
  };

  return (
    <SplashContainer>
      <CircularProgress size={70} />
      <Header>{selectMention()}</Header>
    </SplashContainer>
  );
};

export default GeneralSplash;

const SplashContainer = styled.div`
  ${({ theme }) => theme.flexCenterContainer}
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: url('/images/splash_bg.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Header = styled.h1`
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 36px;
`;
