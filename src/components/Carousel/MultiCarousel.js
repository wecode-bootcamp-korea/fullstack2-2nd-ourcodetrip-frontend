import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Carousel from './Carousel';
import { MultipleApiCall } from '../../utils/ApiCall';

const MultiCarousel = ({ requests }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [entireData, setEntireData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    MultipleApiCall(requests).then(data => {
      setEntireData(data);
      setCurrentData(data[0].list);
    });
  }, [requests]);

  const handleCurrentData = ({ target: { dataset } }) => {
    setSelectedTab(dataset.id * 1);
    if (!entireData.length) return;
    setCurrentData(entireData[dataset.id].list);
  };

  return (
    <Container>
      <Wrapper>
        <TabContainer>
          {entireData.map((ele, idx) => (
            <TabButton
              key={idx}
              data-id={idx}
              selectedTab={selectedTab === idx}
              onClick={handleCurrentData}
            >
              {ele.title}
            </TabButton>
          ))}
        </TabContainer>
        <Carousel cardData={currentData} hold={false} />
      </Wrapper>
    </Container>
  );
};

export default MultiCarousel;

const Container = styled.article``;

const Wrapper = styled.div`
  ${({ theme }) => theme.Wrapper};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TabContainer = styled.section`
  margin-bottom: 10px;
  border-bottom: ${({ theme }) => theme.borders.basic};
`;

const TabButton = styled.button`
  ${({ theme }) => theme.buttons.resetButton}
  position: relative;
  margin-right: 24px;
  padding: 10px 0;
  color: ${({ selectedTab, theme: { colors } }) =>
    selectedTab ? colors.darkGray : colors.gray_1};
  border-bottom: 2px solid
    ${({ selectedTab, theme }) =>
      selectedTab ? theme.colors.primaryBlue_2 : 'transparent'};
  font-size: 15px;
  font-weight: 400;

  &:hover {
    ${({ selectedTab, theme }) =>
      !selectedTab &&
      css`
        color: ${theme.colors.primaryBlue_2};
        border-bottom: 2px solid ${theme.colors.primaryBlue_2};
      `}
  }
`;
