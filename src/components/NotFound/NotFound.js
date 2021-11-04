import React from 'react';
import styled from 'styled-components';

const NotFound = () => (
  <Container>
    <HeaderBox>
      <Header>404</Header>
      <Text>해당 요청이나 데이터를 찾을 수 없습니다</Text>
    </HeaderBox>
  </Container>
);

export default NotFound;

const Container = styled.section`
  ${({ theme }) => theme.Wrapper}
  display: flex;
  align-items: center;
  height: 600px;
  background-image: url('https://i.imgur.com/qqBagsi.png');
  background-repeat: no-repeat;
  background-position: 80% 50%;
`;

const HeaderBox = styled.div`
  margin: 0 0 10px 110px;
`;

const Header = styled.h2`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: ${({ theme }) => theme.fontSizes.titleSize_2};
  font-weight: 500;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray_2};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  letter-spacing: -1px;
`;
