import React from 'react';
import styled from 'styled-components';

const ReviewContainer = () => {
  return (
    <Container>
      <Title>
        후기<span>33</span>
      </Title>
      <RatingBox>
        <RatingPoint>
          <p>4.7</p>
          <p>★★★★★</p>
        </RatingPoint>
        <RatingInfo>
          <p>연인과 가는 여행으로 구매가 많은 상품</p>
          <GaugeBar>
            <span>★★★★★</span>
            <div className="bar">
              <div className="gauge five"></div>
            </div>
            <span>20</span>
          </GaugeBar>
          <GaugeBar>
            <span>★★★★</span>
            <div className="bar">
              <div className="gauge four"></div>
            </div>
            <span>10</span>
          </GaugeBar>
          <GaugeBar>
            <span>★★★</span>
            <div className="bar">
              <div className="gauge three"></div>
            </div>
            <span>3</span>
          </GaugeBar>
          <GaugeBar>
            <span>★★</span>
            <div className="bar">
              <div className="gauge two"></div>
            </div>
            <span>0</span>
          </GaugeBar>
          <GaugeBar>
            <span>★</span>
            <div className="bar">
              <div className="gauge one"></div>
            </div>
            <span>0</span>
          </GaugeBar>
        </RatingInfo>
      </RatingBox>
      <ReviewList>
        <li>
          <span>★★★★★</span>
          <span>크다란</span>
        </li>
        <li>2021-10-20</li>
        <li>힘내세요 ㅠ.ㅜ</li>
      </ReviewList>
    </Container>
  );
};

export default ReviewContainer;

const Container = styled.section`
  padding: 35px 0;
  border-bottom: 1px solid #e8ecef;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 700;

  span {
    margin-left: 8px;
    color: #2b96ed;
  }
`;

const RatingBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const RatingPoint = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 165px;
  background-color: #f8f9fa;
  line-height: 1.2;

  p:first-child {
    color: #343a40;
    font-size: 48px;
    font-weight: 700;
  }

  p:last-child {
    color: #343a40;
    font-size: 30px;
  }
`;

const RatingInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 440px;
  height: 165px;
  color: #51abf3;
  background-color: #f8f9fa;

  p {
    margin-bottom: 8px;
  }
`;

const GaugeBar = styled.div`
  display: flex;
  align-items: center;

  span:first-child {
    width: 40px;
    text-align: right;
    font-size: 8px;
  }

  span:last-child {
    font-size: 12px;
    font-weight: 600;
  }

  .bar {
    position: relative;
    margin: 4px 8px;
    width: 228px;
    height: 4px;
    border-radius: 4px;
    background-color: #dee2e6;

    .gauge {
      width: 65%;
      height: 4px;
      border-radius: 4px;
      background-color: #51abf3;

      &.four {
        width: 30%;
      }

      &.three {
        width: 5%;
      }

      &.two {
        width: 0;
      }

      &.one {
        width: 0;
      }
    }
  }
`;

const ReviewList = styled.ul`
  padding: 24px 0;
  border-bottom: 1px solid #e7eaed;

  li {
    font-size: 14px;

    span:first-child {
      color: #51abf3;
    }

    span:last-child {
      margin-left: 4px;
    }
  }

  li:nth-child(2) {
    margin: 4px 0 12px;
    color: #848c94;
    font-size: 12px;
  }

  li:last-child {
    font-size: 15px;
  }
`;
