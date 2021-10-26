import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router';
import { backgroundUrl as backgroundUrlFromPath } from '../navListData.json';
const NavBackground = () => {
  const { pathname } = useLocation();
  const backgroundUrl = backgroundUrlFromPath[pathname];

  return (
    <WrapBackground pathname={pathname}>
      <BackgroundImage backgroundUrl={backgroundUrl} />
    </WrapBackground>
  );
};
export default NavBackground;

const WrapBackground = styled.div`
  display: ${props => {
    return props.pathname === '/tourticket' ||
      props.pathname === '/flight' ||
      props.pathname === '/accommodation' ||
      props.pathname === '/rentcar'
      ? 'block'
      : 'none';
  }};
  margin-top: -126px;
  z-index: -1;
`;

const BackgroundImage = styled.div`
  box-sizing: content-box;
  position: relative;
  padding-top: 126px;
  height: 165px;
  ${({ backgroundUrl }) =>
    backgroundUrl
      ? css`
          background-image: url(${backgroundUrl});
          background-size: cover;
          background-repeat: no-repeat;
          &::after {
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
          }
        `
      : css`
          background-color: #2b96ed;
        `}
`;
