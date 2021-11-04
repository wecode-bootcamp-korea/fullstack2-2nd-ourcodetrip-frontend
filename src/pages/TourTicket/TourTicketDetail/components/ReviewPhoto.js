import React from 'react';
import styled from 'styled-components';

const ReviewPhoto = ({ reviewRef }) => {
  const reviewPhoto = {
    1: 'https://cdn.pixabay.com/photo/2016/11/02/14/32/lotte-world-tower-1791802_1280.jpg',
    2: 'https://cdn.pixabay.com/photo/2021/01/19/23/41/seoul-5932687_1280.jpg',
    3: 'https://cdn.pixabay.com/photo/2018/08/21/17/26/korea-3621711_1280.jpg',
  };

  return (
    <PhotoContainer ref={reviewRef}>
      <Title>여행자 후기 사진</Title>
      <BoxWrapper>
        <PhotoBox reviewPhoto={reviewPhoto[1]}></PhotoBox>
        <PhotoBox className="second" reviewPhoto={reviewPhoto[2]}></PhotoBox>
        <PhotoBox className="last" reviewPhoto={reviewPhoto[3]}>
          + 16
        </PhotoBox>
      </BoxWrapper>
    </PhotoContainer>
  );
};

export default React.forwardRef((props, ref) => {
  return <ReviewPhoto {...props} reviewRef={ref} />;
});

const PhotoContainer = styled.section`
  padding: 30px 0;
  border-bottom: 1px solid #e8ecef;
`;

const Title = styled.h2`
  padding-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
`;

const BoxWrapper = styled.div`
  display: flex;
`;

const PhotoBox = styled.div`
  width: 230px;
  height: 170px;
  background: url(${({ reviewPhoto }) => reviewPhoto});
  background-size: cover;
  cursor: pointer;

  &:hover {
    filter: brightness(70%);
  }

  &.second {
    margin: 0 5px;
  }

  &.last {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #cccccc;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -2px;
  }
`;
