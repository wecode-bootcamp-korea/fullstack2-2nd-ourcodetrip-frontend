import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdLocationCity } from 'react-icons/md';

import Carousel from '../../components/Carousel/Carousel';
import { cityCarousel, banner } from '../../components/Carousel/defaultOptions';
import { Events } from './Events/Events';
import { MultipleApiCall } from '../../utils/ApiCall';

const Main = () => {
  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const requests = [
    { url: '/data/cities.json', method: 'GET' },
    { url: '/data/banner.json', method: 'GET' },
    { url: '/data/events.json', method: 'GET' },
  ];

  useEffect(() => {
    const AjaxCall = MultipleApiCall(requests);
    AjaxCall.then(data => {
      const [cities, banners, events] = data;
      setData({ cities, banners, events });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { cities, banners, events } = data;

  return (
    <React.Fragment>
      <CitySuggestion>
        <div className="citiesHeader">
          <h2>어디로 떠나세요?</h2>
          <button>
            <MdLocationCity className="cityIcon" />
            <Link to="/">
              <span>전체 도시</span>
            </Link>
          </button>
        </div>
        <Carousel cardData={cities} options={cityCarousel} />
      </CitySuggestion>
      <MainBanner>
        <Carousel cardData={banners} options={banner} />
      </MainBanner>
      <Events cardData={events} title={'전국 핫한 펜션&캠핑 🏡 '} />
      <Events cardData={events} title={'경복궁 베스트 상품'} />
      <Events cardData={events} title={'제주 필수 티켓 🎫'} />
    </React.Fragment>
  );
};

export default Main;

const CitySuggestion = styled.article`
  margin-bottom: 64px;

  .citiesHeader {
    ${({ theme }) => theme.Wrapper};
    margin: 56px auto 32px auto;
    display: flex;
    justify-content: space-between;

    h2 {
      color: ${({ theme }) => theme.colors.darkGray};
      font-size: ${({ theme }) => theme.fontSizes.titleSize};
      font-weight: 500;
    }

    button {
      ${({ theme }) => theme.buttons.button_1}
      display: flex;
      justify-content: center;
      align-items: center;

      .cityIcon {
        margin-right: 5px;
        color: ${({ theme }) => theme.colors.primaryBlue};
        font-size: 20px;
      }
    }
  }
`;

const MainBanner = styled.article`
  margin: 70px 0 90px;
`;
