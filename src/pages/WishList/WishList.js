import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { MultipleApiCall, ApiCall } from '../../utils/ApiCall';
import Cards from '../../components/Carousel/Cards';
import Carousel from '../../components/Carousel/Carousel';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { listCards } from '../../components/Carousel/defaultOptions';
import { displayRatingToStars } from '../../utils/displayRatingToStars';
import EmptyList from './components/EmptyList';

const WishList = () => {
  const [wishListData, setWishListData] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [suggestionData, setSuggestionData] = useState([]);

  useEffect(() => {
    MultipleApiCall([
      { url: 'http://localhost:8001/users/wishlist', method: 'GET' },
    ]).then(([initData]) => {
      // console.log(initData.data);
      setWishListData(Object.values(initData.data));
      setCities(Object.keys(initData.data));
    });
  }, []);

  useEffect(() => {
    ApiCall(`data/suggestion${selectedTab + 1}.json`, 'GET').then(data => {
      setSuggestionData(data);
    });
  }, [selectedTab]);

  return !wishListData.length ? (
    <EmptyList />
  ) : (
    <React.Fragment>
      <Main>
        <HeaderContainer>
          <Header>위시리스트</Header>
        </HeaderContainer>
        <MainContainer>
          <TabContainer>
            {cities.map((ele, idx) => (
              <TabButton
                key={idx}
                selectedTab={selectedTab === idx}
                onClick={() => setSelectedTab(idx)}
              >
                {ele}
                <ProductCount selectedTab={selectedTab === idx}>
                  {wishListData[idx].length}
                </ProductCount>
              </TabButton>
            ))}
          </TabContainer>
          <ProductContainer>
            {wishListData?.length !== 0 &&
              wishListData[selectedTab]?.map(ele => {
                return (
                  <Cards
                    options={listCards}
                    displayRatingToStars={displayRatingToStars}
                    key={ele.id}
                    {...ele}
                  />
                );
              })}
          </ProductContainer>
        </MainContainer>
      </Main>
      <SuggestionContainer>
        <SectionHeader
          title={`${cities[selectedTab]} 여행자가 함께 본 상품`}
          subLink={'/'}
          linkDesc={'더 보기'}
        />
        <Carousel cardData={suggestionData?.list} />
      </SuggestionContainer>
      <EventContainer>
        <EventBox>
          <EventHeader>
            {cities[selectedTab]} 숙소는 준비하셨나요?
            <EventText>최대 1200% 무제한 캐시백 받기</EventText>
          </EventHeader>
          <EventLinkButton>숙소 찾기</EventLinkButton>
        </EventBox>
      </EventContainer>
    </React.Fragment>
  );
};

export default WishList;

const Main = styled.main`
  ${({ theme }) => theme.Wrapper}
`;

const HeaderContainer = styled.div`
  padding: 50px 0 35px;
`;

const Header = styled.h2`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.underTitleSize};
  font-weight: 500;
  letter-spacing: -1px;
`;

const MainContainer = styled.article`
  padding-bottom: 80px;
`;

const TabContainer = styled.section`
  margin-bottom: 30px;
  border-bottom: ${({ theme }) => theme.borders.basic};
`;

const TabButton = styled.button`
  ${({ theme }) => theme.buttons.resetButton}
  margin-right: 24px;
  padding: 14px 0;
  color: ${({ theme }) => theme.colors.darkGray};
  border-bottom: 3px solid
    ${({ selectedTab, theme }) =>
      selectedTab ? theme.colors.primaryBlue_2 : 'transparent'};
  font-size: 17px;
  font-weight: 500;
  transition: border-bottom 0.2s;

  &:hover {
    ${({ selectedTab, theme }) =>
      !selectedTab &&
      css`
        border-bottom: 2px solid ${theme.colors.gray_1};
      `}
  }
`;

const ProductCount = styled.span`
  margin-left: 4px;
  color: ${({ selectedTab, theme }) =>
    selectedTab ? theme.colors.primaryBlue_2 : theme.colors.gray_1};
`;

const ProductContainer = styled.section`
  width: ${({ theme }) => theme.WrapSize};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const SuggestionContainer = styled.section`
  padding: 60px 0 10px;
  background-color: ${({ theme }) => theme.colors.gray_3};
`;

const EventContainer = styled.section`
  ${({ theme }) => theme.flexCenterContainer}
  padding: 60px 0 0;
`;

const EventBox = styled.div`
  display: flex;
`;

const EventHeader = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 90px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 17px;
  font-weight: 500;
`;

const EventText = styled.span`
  color: ${({ theme }) => theme.colors.primaryBlue_2};
`;

const EventLinkButton = styled.button`
  ${({ theme }) => theme.buttons.resetButton}
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.primaryBlue_2};
  background-color: #e7f4fd;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background-color: #cbe7fd;
    box-shadow: ${({ theme }) => theme.shadow.button};
  }
`;
