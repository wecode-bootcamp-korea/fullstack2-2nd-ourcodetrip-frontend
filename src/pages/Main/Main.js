import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdLocationCity } from 'react-icons/md';

import Carousel from '../../components/Carousel/Carousel';
import { cityCarousel, banner } from '../../components/Carousel/defaultOptions';
import Events from './Events/Events';
import { MultipleApiCall } from '../../utils/ApiCall';

const Main = () => {
  const [data, setData] = useState([]);
  const [eventData, setEventData] = useState([]);

  const requests = [
    { url: '/data/cities.json', method: 'GET' },
    { url: '/data/banner.json', method: 'GET' },
    { url: '/data/events.json', method: 'GET' },
    { url: '/data/events2.json', method: 'GET' },
    { url: '/data/events3.json', method: 'GET' },
  ];

  useEffect(() => {
    const AjaxCall = MultipleApiCall(requests);
    AjaxCall.then(data => {
      const [cities, banners, ...events] = data;
      setData({ cities, banners });
      setEventData(events);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [event1, event2, event3] = eventData;

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
        <Carousel cardData={data.cities} options={cityCarousel} />
      </CitySuggestion>
      <MainBanner>
        <Carousel cardData={data.banners} options={banner} />
      </MainBanner>
      <Events cardData={event3?.list} title={event3?.title} />
      <Events cardData={event1?.list} title={event1?.title} />
      <Events cardData={event2?.list} title={event2?.title} />
      <Events cardData={event3?.list} title={event3?.title} />
    </React.Fragment>
  );
};

export default Main;

const CitySuggestion = styled.article`
  margin-bottom: 70px;

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
  margin: 0 0 80px;
`;
