import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';

import Carousel from '../../../components/Carousel/Carousel';

const Events = ({ cardData, title, link, eventLink }) => {
  return (
    <Container>
      <Wrapper>
        {title ? (
          <EventHeader>
            <h2>{title}</h2>
            {eventLink ? (
              <span>
                <Link to={link || '/'}>더 보기 &gt;</Link>
              </span>
            ) : null}
          </EventHeader>
        ) : (
          <Skeleton
            variant="rectangular"
            width={180}
            height={25}
            style={{ marginBottom: '6px' }}
          />
        )}
      </Wrapper>
      <Carousel cardData={cardData} />
    </Container>
  );
};

export default Events;

const Container = styled.article`
  margin-bottom: 56px;
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.Wrapper};
  display: flex;
  justify-content: space-between;
`;

const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
  width: 100%;

  h2 {
    ${({ theme }) => theme.EventTitle};
  }

  span {
    color: ${({ theme }) => theme.colors.gray_2};
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;
