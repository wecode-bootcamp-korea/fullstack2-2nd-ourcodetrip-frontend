import React from 'react';
import styled from 'styled-components';

const ScrollTab = ({ multipleRefs, productType }) => {
  const handleScrollIntoView = refName => {
    multipleRefs[refName].current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const sections = [
    productType.name === '티켓' ? '티켓 선택' : '옵션 선택',
    '상품 소개',
    '이용 안내',
    '환불 안내',
    '후기',
  ];

  return (
    <>
      <Container>
        {sections.map((section, idx) => {
          return (
            <Button
              key={idx}
              onClick={() => {
                handleScrollIntoView(Object.keys(multipleRefs)[idx]);
              }}
            >
              {section}
            </Button>
          );
        })}
      </Container>
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
`;

const Button = styled.button`
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
    bottom: 0;
    height: 2px;
    border-bottom: 3px solid #2b96ed;
    transform: scaleX(0);
    transition: transform 200ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;
