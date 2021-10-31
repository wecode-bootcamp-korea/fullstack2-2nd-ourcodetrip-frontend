import React from 'react';
import styled from 'styled-components';

const Alternative = () => {
  return (
    <AltContainer>
      <AltHeaderBox>
        <AltHeader>후기 작성하고 할인쿠폰 받으세요!</AltHeader>
        <AltParagraph>
          후기를 작성하신 모든 분께 코드카타 프리패스를, 상품의 첫 후기일 경우
          위워크 자유이용권을 드립니다.
        </AltParagraph>
      </AltHeaderBox>
      <AltImageContainer>
        <AltImage
          src="https://i.imgur.com/Ybnzx7R.png"
          alt="위워크 자유이용권"
        />
        <AltImage
          src="https://i.imgur.com/FYSCAy6.png"
          alt="코드카타 프리패스"
        />
      </AltImageContainer>
    </AltContainer>
  );
};

export default Alternative;

const AltContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border: 8px solid #e7f4fd;
`;

const AltHeaderBox = styled.div`
  min-width: 315px;
`;

const AltHeader = styled.h3`
  padding: 4px 0 8px;
  color: ${({ theme }) => theme.colors.primaryBlue_2};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 500;
`;

const AltParagraph = styled.p`
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: ${({ theme }) => theme.fontSizes.underBase};
  line-height: 1.6;
`;

const AltImageContainer = styled.div`
  display: flex;
`;

const AltImage = styled.img`
  margin-left: 26px;
  height: 72px;
  width: 118px;
  filter: drop-shadow(0 2px 4px rgb(0 0 0 / 15%));
`;
