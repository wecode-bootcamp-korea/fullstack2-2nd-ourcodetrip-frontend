import React from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { FaTimes, FaFacebook, FaTwitter } from 'react-icons/fa';

const ShareModal = ({ openModal, getReady }) => {
  return (
    <ModalContainer onClick={openModal}>
      <Container>
        <Title>
          <span>공유하기</span>
          <span onClick={openModal}>
            <FaTimes />
          </span>
        </Title>
        <Sns onClick={getReady}>
          <MdEmail />
          <span>Email</span>
        </Sns>
        <Sns onClick={getReady}>
          <FaFacebook />
          <span>Facebook</span>
        </Sns>
        <Sns onClick={getReady}>
          <FaTwitter />
          <span>Twitter</span>
        </Sns>
      </Container>
    </ModalContainer>
  );
};

export default ShareModal;

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

const Container = styled.div`
  position: absolute;
  padding: 15px 0;
  width: 150px;
  height: 160px;
  border: 1px solid #e7eaed;
  right: 20%;
  top: 20%;
  right: 10%;
  color: #343a40;
  background-color: #ffffff;
  font-size: 14px;
  box-shadow: 0 3px 3px 0 #e7eaed;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 15px;

  span:first-child {
    font-weight: 600;
  }

  span:last-child {
    cursor: pointer;
  }
`;

const Sns = styled.div`
  padding: 10px 15px;

  span {
    margin-left: 5px;
  }

  &:hover {
    background-color: #e7eaed;
    cursor: pointer;
  }
`;
