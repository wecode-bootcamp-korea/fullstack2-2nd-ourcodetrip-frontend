import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ReviewContainer from './ReviewContainer';
import Alternative from './Alternative';

import { ApiCall } from '../../../utils/ApiCall';

const ReviewBoard = () => {
  const [threadData, setThreadData] = useState([]);
  const [overviewData, setOverviewData] = useState([]);
  const [reviewLimits, setReviewLimits] = useState(false);
  const [requestCount, setRequestCount] = useState(1);
  const { totalReviews } = overviewData;

  useEffect(() => {
    const initAjaxCall = ApiCall('/data/reviewInit.json', 'GET');
    initAjaxCall.then(response => {
      const { overview, threads } = response;
      if (threads.length < 3 || overview.totalReviews / 3 <= 1) {
        setReviewLimits(true);
      }
      setOverviewData(overview);
      setThreadData(threads);
    });
  }, []);

  const threadControl = data => {
    setThreadData(data);
  };

  const countingRequest = () => {
    setRequestCount(requestCount + 1);
  };

  useEffect(() => {
    if (Math.ceil(totalReviews / 3) === requestCount) {
      setReviewLimits(true);
    }
  }, [requestCount, totalReviews]);

  return (
    <React.Fragment>
      <ReviewContainerStyle>
        <ReviewHeader>
          후기
          {totalReviews ? <ReviewCount>{totalReviews}</ReviewCount> : null}
        </ReviewHeader>
        {totalReviews ? (
          <ReviewContainer
            threadData={threadData}
            overviewData={overviewData}
            threadControl={threadControl}
            countingRequest={countingRequest}
            reviewLimits={reviewLimits}
          />
        ) : (
          <Alternative />
        )}
      </ReviewContainerStyle>
    </React.Fragment>
  );
};

export default ReviewBoard;

const ReviewContainerStyle = styled.section`
  margin: 0 auto;
  width: 700px;
`;

const ReviewHeader = styled.h3`
  padding: 33px 0 16px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 600;
`;

const ReviewCount = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.primaryBlue_2};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;
