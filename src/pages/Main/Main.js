import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdLocationCity } from 'react-icons/md';

import Carousel from '../../components/Carousel/Carousel';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { cityCarousel, banner } from '../../components/Carousel/defaultOptions';
import { MultipleApiCall } from '../../utils/ApiCall';

import MainPopUp from '../../components/Modals/MainPopUp';
import { getCookie } from '../../utils/cookie';

const Main = () => {
  const [data, setData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [popUpData, setPopUpData] = useState([]);

  const requests = [
    { url: '/data/cities.json', method: 'GET' },
    { url: '/data/banner.json', method: 'GET' },
    { url: '/data/events.json', method: 'GET' },
    { url: '/data/events2.json', method: 'GET' },
    { url: '/data/events3.json', method: 'GET' },
    { url: '/data/popup.json', method: 'GET' },
  ];

  useEffect(() => {
    const AjaxCall = MultipleApiCall(requests);
    AjaxCall.then(data => {
      setPopUpData(...data.splice(-1, 1));
      const [cities, banners, ...events] = data;
      setData({ cities, banners });
      setEventData(events);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [event1, event2, event3] = eventData;

  const doesUserBlockedPopUp = getCookie('Mainpopup');

  return (
    <React.Fragment>
      {!doesUserBlockedPopUp ? <MainPopUp popUpData={popUpData} /> : null}
      <CitySuggestion>
        <div className="citiesHeader">
          <h2>어디로 떠나세요?</h2>
          <button>
            <MdLocationCity className="cityIcon" />
            <Link to="/cities?city=Seouls">
              <span>전체 도시</span>
            </Link>
          </button>
        </div>
        <Carousel
          cardData={data.cities}
          options={cityCarousel}
          uniquePath={'/cities'}
        />
      </CitySuggestion>
      <MainBanner>
        <Carousel cardData={data.banners} options={banner} />
      </MainBanner>
      <SectionHeader title={event3?.title} />
      <Carousel cardData={event3?.list} />
      <SectionHeader title={event1?.title} />
      <Carousel cardData={event1?.list} />
      <SectionHeader title={event2?.title} />
      <Carousel cardData={event2?.list} />
      <SectionHeader title={event3?.title} />
      <Carousel cardData={event3?.list} />
    </React.Fragment>
  );
};

export default Main;

const CitySuggestion = styled.article`
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

const MainBanner = styled.article``;
