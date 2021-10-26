import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import styled from 'styled-components';

export const Events = ({ cardData, title }) => {
  return (
    <Container>
      <Wrapper>
        <EventTitle>{title}</EventTitle>
      </Wrapper>
      <Carousel cardData={cardData} />
    </Container>
  );
};

const Container = styled.article`
  margin-bottom: 56px;
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.Wrapper};
  display: flex;
  justify-content: space-between;
`;

const EventTitle = styled.h2`
  ${({ theme }) => {
    return theme.EventTitle;
  }}
`;
