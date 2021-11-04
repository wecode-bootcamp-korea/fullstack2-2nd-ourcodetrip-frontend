import React, { useState } from 'react';
import styled from 'styled-components';
import { BsShare, BsHeart, BsHeartFill } from 'react-icons/bs';
import { FiMail, FiArrowDown } from 'react-icons/fi';
import { FcAssistant } from 'react-icons/fc';
import ShareModal from './ShareModal';

const FloatingBox = ({
  standardPrice,
  discountRate,
  wishButton,
  handleWish,
  wishCount,
  partner,
  productType,
  ticketRef,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(!modalOpen);
  };

  const getReady = () => {
    alert('준비중입니다.');
  };

  const discountPrice = standardPrice - standardPrice * discountRate;

  return (
    <Floating>
      <BoxContainer>
        <BoxHeader>
          <Price>
            {productType.name === '티켓' && discountRate !== null && (
              <Discount>
                <OriginPrice>
                  {new Intl.NumberFormat('ko-KR').format(standardPrice)}원
                </OriginPrice>
                
                <span>
                  <FiArrowDown />
                  {discountRate * 100}%
                </span>
              </Discount>
            )}
            <SalePrice>
              <span>
                {discountRate === null
                  ? new Intl.NumberFormat('ko-KR').format(standardPrice)
                  : new Intl.NumberFormat('ko-KR').format(discountPrice)}
              </span>
              <span>부터</span>
            </SalePrice>
          </Price>
          <SHareButton onClick={openModal}>
            <BsShare />
          </SHareButton>
          {modalOpen && (
            <ShareModal openModal={openModal} getReady={getReady} />
          )}
        </BoxHeader>
        <ChoiceButton
          onClick={() => {
            ticketRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {productType.name === '티켓' ? '티켓 선택' : '예약하기'}
        </ChoiceButton>
        <WishButton onClick={handleWish}>
          <HeartIcon wishButton={wishButton}>
            <span>
              <BsHeart />
            </span>
            <span>
              <BsHeartFill />
            </span>
          </HeartIcon>
          {wishButton ? '위시리스트에 추가됨' : '위시리스트에 담기'}
        </WishButton>
        <WishCount>
          {wishCount}명이 이 상품을 위시리스트에 담았습니다.
        </WishCount>
      </BoxContainer>
      <PartnerContainer>
        <PartnerTitle onClick={getReady}>
          <PartnerThumbnail>
            <FcAssistant />
          </PartnerThumbnail>
          <PartnerName>{partner && partner}</PartnerName>
        </PartnerTitle>
        <AskPartner onClick={getReady}>
          <FiMail />
          <span>문의하기</span>
        </AskPartner>
      </PartnerContainer>
    </Floating>
  );
};

export default FloatingBox;

const Floating = styled.div`
  position: sticky;
  top: 50px;
  right: 180px;
  padding-top: 20px;
  width: 320px;
  height: 260px;
  border: 1px solid #e7eaed;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 4px 5px 0 #e7eaed;
`;

const BoxContainer = styled.div`
  padding: 0 20px 15px 20px;
`;

const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
`;

const Discount = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
  color: #adb5bd;

  span:last-child {
    color: red;
  }
`;

const OriginPrice = styled.span`
  font-size: 14px;
  text-decoration: line-through;
`;

const SalePrice = styled.div`
  span:first-child {
    font-size: 20px;
    font-weight: 700;
  }

  span:last-child {
    margin-left: 4px;
    color: #adb5bd;
    font-size: 14px;
  }
`;

const SHareButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: none;
  background-color: #ffffff;
`;

const ChoiceButton = styled.button`
  margin-bottom: 8px;
  width: 100%;
  padding: 10px;
  border: 1px solid #51abf3;
  border-radius: 5px;
  color: #ffffff;
  background-color: #51abf3;
  font-size: 16pz;
  font-weight: 700;

  &:hover {
    background-color: #2b96ec;
  }
`;

const WishButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4d9;
  border-radius: 5px;
  background-color: #ffffff;
  font-weight: 700;

  &:hover {
    box-shadow: 0 3px 3px 0 #e7eaed;
  }
`;

const HeartIcon = styled.span`
  margin-right: 4px;
  color: #cccccc;

  span:first-child {
    display: ${({ wishButton }) => (wishButton ? 'none' : 'flex')};
  }

  span:last-child {
    display: ${({ wishButton }) => (wishButton ? 'flex' : 'none')};
    color: red;
  }
`;

const WishCount = styled.div`
  margin: 8px;
  text-align: center;
  color: #ced4d9;
  font-size: 13px;
`;

const PartnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 15px 0 15px;
  border-top: 1px solid #e7eaed;
`;

const PartnerTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
`;

const PartnerThumbnail = styled.span`
  margin-right: 4px;
  text-align: center;
  font-size: 20px;
`;

const PartnerName = styled.span`
  font-weight: 500;
`;

const AskPartner = styled.span`
  display: flex;
  align-items: center;
  padding: 5px;
  color: #2b96ec;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f5fbff;
  }

  span {
    margin-left: 4px;
  }
`;
