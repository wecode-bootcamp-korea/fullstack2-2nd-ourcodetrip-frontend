import React, { useState } from 'react';
import styled from 'styled-components';

import Overlay from './Overlay';
import { setCookie } from '../../utils/cookie';

const MainPopUp = ({ popUpData }) => {
  const [visiblility, setVisibility] = useState(true);
  const { id, title, imgUrl } = popUpData;

  const doNotDisplayToday = () => {
    setCookie('Mainpopup', id, {
      path: '/',
      maxAge: 3600,
      secure: true,
    });
    setVisibility(false);
  };

  const closeModal = () => {
    setVisibility(false);
  };

  return (
    <PopUpContainer visiblility={visiblility}>
      <Overlay onClick={closeModal} />
      <PopUpContext>
        <ImageContainer>
          <Image alt={title} src={imgUrl} />
        </ImageContainer>
        <PopUpController>
          <StyledButton onClick={doNotDisplayToday}>
            한시간 보지 않기
          </StyledButton>
          <StyledButton onClick={closeModal}>닫기</StyledButton>
        </PopUpController>
      </PopUpContext>
    </PopUpContainer>
  );
};

export default MainPopUp;

const PopUpContainer = styled.article`
  display: ${({ visiblility }) => (visiblility ? 'block' : 'none')};
  position: relative;
`;

const PopUpContext = styled.dl`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  overflow: hidden;
  z-index: 9900;
`;

const ImageContainer = styled.dt`
  height: 440px;
  width: 330px;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
`;

const PopUpController = styled.div`
  background-color: #212529;
  opacity: 0.8;
`;

const StyledButton = styled.button`
  position: relative;
  padding: 17px 0;
  width: 50%;
  color: #ffffff;
  background: none;
  font-weight: 500;
  border: none;
  cursor: pointer;

  &:first-child::after {
    content: '';
    position: absolute;
    top: 15px;
    right: 0;
    height: 20px;
    width: 1px;
    background-color: #ffffff;
    opacity: 0.5;
  }
`;
