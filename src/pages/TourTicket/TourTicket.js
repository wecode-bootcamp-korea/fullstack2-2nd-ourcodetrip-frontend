import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { MultipleApiCall } from '../../utils/ApiCall';

import Carousel from '../../components/Carousel/Carousel';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import {
  expCityCarousel,
  banner,
} from '../../components/Carousel/defaultOptions';

const Experiences = () => {
  const [data, setData] = useState([]);

  const requests = [
    { url: '/data/destinations.json', method: 'GET' },
    { url: '/data/banner2.json', method: 'GET' },
    { url: '/data/events4.json', method: 'GET' },
    { url: '/data/experiences.json', method: 'GET' },
    { url: '/data/experiences2.json', method: 'GET' },
    { url: '/data/experiences3.json', method: 'GET' },
  ];

  useEffect(() => {
    const AjaxCall = MultipleApiCall(requests);
    AjaxCall.then(data => {
      const [cities, banners, events, events2, events3, events4] = data;
      const formattedCities = [
        ...cities,
        {
          id: cities.length + 1,
          name: '전체 여행지',
          link: '/cities',
          imgUrl: 'https://i.imgur.com/scLUqqE.jpg',
        },
      ];
      setData({ formattedCities, banners, events, events2, events3, events4 });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <CityCarouselContainer>
        <Carousel
          cardData={data.formattedCities}
          uniquePath={'/cities?city=Seoul'}
          options={{
            ...expCityCarousel,
            customCardStyle: {
              border: 'none',
              boxShadow: '0 0 6px rgb(0 0 0 / 30%)',
            },
          }}
        />
      </CityCarouselContainer>
      <MainBanner>
        <Carousel cardData={data.banners} options={banner} />
      </MainBanner>
      <SectionHeader
        title={data.events?.title}
        linkDesc={'더 보기 >'}
        subLink={'/'}
      />
      <Carousel cardData={data.events?.list} />
      <SectionHeader
        title={data.events2?.title}
        linkDesc={'더 보기 >'}
        subLink={'/'}
      />
      <Carousel cardData={data.events2?.list} />
      <SectionHeader
        title={data.events3?.title}
        linkDesc={'더 보기 >'}
        subLink={'/'}
      />
      <Carousel cardData={data.events3?.list} />
      <SectionHeader
        title={data.events4?.title}
        linkDesc={'더 보기 >'}
        subLink={'/'}
      />
      <Carousel cardData={data.events4?.list} />
    </React.Fragment>
  );
};

export default Experiences;

const CityCarouselContainer = styled.div`
  &::before {
    content: '';
    position: absolute;
    height: 94px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primaryBlue};
  }
`;

const MainBanner = styled.article`
  margin: 40px 0 60px;
`;
