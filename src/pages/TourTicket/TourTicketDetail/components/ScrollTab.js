import React from 'react';
import styled from 'styled-components';

const ScrollTab = ({
  ticketRef,
  productRef,
  infoRef,
  refundRef,
  reviewRef,
  productType,
  scrollTab,
}) => {
  return (
    <>
      {scrollTab ? (
        <Container>
          <button
            onClick={() => {
              ticketRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {productType.name === '티켓' ? '티켓 선택' : '옵션 선택'}
          </button>
          <button
            onClick={() => {
              productRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            상품 소개
          </button>
          <button
            onClick={() => {
              infoRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            이용 안내
          </button>
          <button
            onClick={() => {
              refundRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            환불 안내
          </button>
          <button
            onClick={() => {
              reviewRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            후기
          </button>
        </Container>
      ) : null}
    </>
  );
};

export default ScrollTab;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 52px;
  border-bottom: 1px solid #e7eaed;
  background-color: white;

  button {
    position: relative;
    padding: 16px 0;
    margin-right: 10px;
    border: none;
    color: #666d75;
    background-color: white;
    font-size: 16px;
    font-weight: 700;

    &:after {
      position: absolute;
      content: '';
      width: 100%;
      left: 0;
      bottom: -1px;
      height: 2px;
      border-bottom: 3px solid #2b96ed;
      transform: scaleX(0);
      transition: transform 200ms ease-in-out;
    }

    &:hover:after {
      transform: scaleX(1);
    }
  }
`;
