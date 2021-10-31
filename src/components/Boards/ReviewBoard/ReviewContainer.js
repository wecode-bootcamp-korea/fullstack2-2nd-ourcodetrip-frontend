import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Threads from './Threads';
import RequestReviewButton from './RequestReviewButton';
import { ApiCall } from '../../../utils/ApiCall';

import {
  displayRatingToStars,
  displayStars,
} from '../../../utils/displayRatingToStars';

const ReviewContainer = ({
  threadData,
  overviewData,
  reviewLimits,
  threadControl,
  countingRequest,
}) => {
  const [blockRequest, setBlockRequest] = useState(false);
  const requestButtonRef = useRef(null);

  const {
    totalReviews = 0,
    ratingAvg = 0,
    totalReviewsForEachRating = [],
  } = overviewData;

  const requestAdditionalReviews = () => {
    if (blockRequest || reviewLimits) return;
    ApiCall(`/data/reviews.json`, 'GET')
      .then(({ threads }) => {
        setBlockRequest(true);
        threadControl([...threadData, ...threads]);
        countingRequest();
        if (requestButtonRef.current) {
          requestButtonRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
        }
      })
      .then(
        setTimeout(() => {
          setBlockRequest(false);
        }, 1500)
      );
  };

  return (
    <React.Fragment>
      <OverviewContainer>
        <TotalRatingContainer>
          <TotalRate>{ratingAvg}</TotalRate>
          <div>
            {displayRatingToStars(ratingAvg, {
              color: '#343a40',
              fontSize: '21px',
            })}
          </div>
        </TotalRatingContainer>
        <RatingLists>
          <RatingListsHeader>
            고객님께서 남겨주신 소중한 리뷰입니다
          </RatingListsHeader>
          {totalReviewsForEachRating.map((rating, idx) => (
            <RatingList key={idx}>
              <StarContainer>
                {displayStars(5 - idx, {
                  color: '#51ABF3',
                  fontSize: '8px',
                })}
              </StarContainer>
              <RatingGauge>
                <RatingGaugeBar percentage={(rating / totalReviews) * 100} />
              </RatingGauge>
              <EachCount>{rating}</EachCount>
            </RatingList>
          ))}
        </RatingLists>
      </OverviewContainer>
      <ThreadContainer>
        <Threads threadData={threadData} reviewLimits />
        {!reviewLimits && (
          <RequestReviewButton
            requestAdditionalReviews={requestAdditionalReviews}
            requestButtonRef={requestButtonRef}
            blockRequest={blockRequest}
          />
        )}
      </ThreadContainer>
    </React.Fragment>
  );
};

export default ReviewContainer;

const ThreadContainer = styled.div`
  ${({ theme }) => theme.flexCenterContainer};
  flex-direction: column;
`;

const RatingLists = styled.ul`
  ${({ theme }) => theme.flexCenterContainer}
  flex-direction: column;
  padding: 24px;
  gap: 2px;
  height: 165px;
  width: 442px;
  background-color: ${({ theme }) => theme.colors.gray_4};
`;

const RatingListsHeader = styled.h3`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.primaryBlue_2};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

const RatingList = styled.li`
  ${({ theme }) => theme.flexCenterContainer}
  justify-content: flex-start;
  height: 17px;
  width: 374px;
`;

const StarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40px;
`;

const RatingGauge = styled.div`
  position: relative;
  margin: 0 7px;
  height: 4px;
  width: 288px;
  background-color: #dee2e6;
  border-radius: 4px;
`;

const RatingGaugeBar = styled.span`
  display: inline-block;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primaryBlue_2};
  border-radius: 4px;
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  max-width: 100%;
`;

const EachCount = styled.span`
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 300;
`;

const OverviewContainer = styled.div`
  ${({ theme }) => theme.flexCenterContainer};
`;

const TotalRatingContainer = styled.div`
  ${({ theme }) => theme.flexCenterContainer}
  flex-direction: column;
  height: 165px;
  margin-right: 8px;
  width: 250px;
  background-color: ${({ theme }) => theme.colors.gray_4};
`;

const TotalRate = styled.h3`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.titleSize_2};
  font-weight: 600;
`;
