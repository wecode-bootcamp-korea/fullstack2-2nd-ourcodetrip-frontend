import React from 'react';
import styled from 'styled-components';

import CircularProgress from '@mui/material/CircularProgress';
import { MdKeyboardArrowDown } from 'react-icons/md';

const RequestReviewButton = ({
  requestButtonRef,
  requestAdditionalReviews,
  blockRequest,
}) => {
  return (
    <MoreReviewButton ref={requestButtonRef} onClick={requestAdditionalReviews}>
      {!blockRequest ? (
        <React.Fragment>
          <RequestButtonHeader>후기 더 보기</RequestButtonHeader>
          <MdKeyboardArrowDown style={{ fontSize: '20px' }} />
        </React.Fragment>
      ) : (
        <CircularProgress
          size={25}
          style={{ transform: 'scale(0.3)', color: '#51abf3' }}
        />
      )}
    </MoreReviewButton>
  );
};

export default React.forwardRef((props, ref) => {
  return <RequestReviewButton {...props} ref={ref} />;
});

const MoreReviewButton = styled.button`
  ${({ theme }) => theme.flexCenterContainer};
  ${({ theme }) => theme.buttons.button_1};
  margin-top: 30px;
  height: 48px;
  width: 180px;
`;

const RequestButtonHeader = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
`;
