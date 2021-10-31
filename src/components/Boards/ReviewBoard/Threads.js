import React from 'react';
import styled from 'styled-components';

import { displayRatingToStars } from '../../../utils/displayRatingToStars';
import dateDisplayFormat from '../../../utils/dateDisplayFormat';

const Threads = ({ threadData = [], reviewLimits }) => {
  return (
    <ThreadLists>
      {threadData.map((thread, idx) => {
        const {
          // 추후 DB 데이터 id 받아오면 수정 예정
          // eslint-disable-next-line no-unused-vars
          reviewId = 0,
          rating = 0,
          userName = '',
          review = '',
          reviewImages,
          createdAt = 1635671294908,
        } = thread;

        return (
          <Thread key={idx}>
            <ThreadHeader>
              {displayRatingToStars(rating, {
                color: '#51ABF3',
                fontSize: '12px',
              })}
              {userName.length ? (
                <UserNameStyle>{userName[0].padEnd(3, '*')}</UserNameStyle>
              ) : null}
            </ThreadHeader>
            <ThreadDate>{dateDisplayFormat(createdAt)}</ThreadDate>
            <ThreadContent>
              {review.split(/\\n/g).map((txt, idx) => (
                <p key={idx}>{txt}</p>
              ))}
            </ThreadContent>
            {reviewImages ? (
              <ReviewImageContainer>
                <ReviewImage
                  src={reviewImages}
                  alt={`${userName}님의 후기 사진`}
                  data-id={idx}
                />
              </ReviewImageContainer>
            ) : null}
          </Thread>
        );
      })}
      {reviewLimits && <Overlay />}
    </ThreadLists>
  );
};

export default Threads;

const ThreadLists = styled.ul`
  position: relative;
`;

const Thread = styled.li`
  position: relative;
  padding: 24px 0;
  width: 700px;
  border-bottom: ${({ theme }) => theme.borders.basic};
`;

const ThreadHeader = styled.div`
  margin-bottom: 7px;
`;

const UserNameStyle = styled.span`
  margin-left: 6px;
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

const ThreadDate = styled.div`
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const ThreadContent = styled.div`
  width: 600px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  letter-spacing: -0.5px;
`;

const ReviewImageContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 0;
  height: 64px;
  width: 64px;
  background-color: ${({ theme }) => theme.colors.black};
  overflow: hidden;
`;

const ReviewImage = styled.img`
  height: 64px;
  width: 64px;
  max-height: 100%;
  object-fit: cover;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 180px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;
