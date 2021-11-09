import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ServiceButtons from './ServiceButtons';
import MainCategories from './MainCategories';
import { MultipleApiCall, ApiCall } from '../../utils/ApiCall';
import Carousel from '../../components/Carousel/Carousel';
import {
  tagCityCarousel,
  magazine,
} from '../../components/Carousel/defaultOptions';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

import { BsChevronRight } from 'react-icons/bs';
import MultiCarousel from '../../components/Carousel/MultiCarousel';

const Cities = () => {
  const [initData, setInitData] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [currentService, setCurrentService] = useState(1);
  const [magazineData, setMagazineData] = useState([]);
  const [spotData, setSpotData] = useState([]);
  const [realData, setRealData] = useState([]);

  useEffect(() => {
    MultipleApiCall([
      { url: '/data/citymain.json', method: 'GET' },
      { url: '/data/events.json', method: 'GET' },
    ])
      .then(response => {
        if (!response.length) return;
        setInitData(...response[0]);
        setSliderData(response[1]);
        return ApiCall('data/magazine.json', 'GET');
      })
      .then(response => {
        setMagazineData(response);
        return ApiCall('data/spot.json', 'GET');
      })
      .then(response => {
        setSpotData(response);
        return MultipleApiCall([
          { url: 'http://localhost:8001/categories/service', method: 'GET' },
          { url: 'http://localhost:8001/categories/main', method: 'GET' },
          {
            url: 'http://localhost:8001/products/classification/1',
            method: 'GET',
          },
        ]);
      })
      .then(response => {
        const slider1 = response[2];
        setRealData(slider1.data);
      });
  }, []);

  const selectService = serviceIndex => {
    setCurrentService(serviceIndex);
  };

  const {
    name,
    country,
    backgroundImg,
    services = [],
    mainCategories = [],
  } = initData;

  // useEffect(() => {
  //   console.log(initData);
  // }, [initData]);

  return (
    <CitiesPage>
      <HeaderContainer backgroundImg={backgroundImg}>
        <Wrapper>
          <BreadCrumb>
            {country}
            <BsChevronRight style={{ margin: '0 4px' }} />
            <Bold>{name}</Bold>
          </BreadCrumb>
          <Header>{name}</Header>
        </Wrapper>
      </HeaderContainer>
      <Dummy />
      <ServiceButtons
        services={services}
        selectService={selectService}
        currentService={currentService}
      />
      <MainCategories
        mainCategories={[
          ...mainCategories,
          {
            categoryId: 0,
            name: '전체',
            query: '',
          },
        ]}
      />
      <SectionHeader title={'추천 상품'} />
      <Carousel cardData={realData?.list} hold={false} />
      <SectionHeader
        title={'투어&티켓 베스트셀러'}
        subLink={'/'}
        linkDesc={'서울 투어&티켓 더 보기 >'}
      />
      <MultiCarousel
        requests={[
          { url: `/data/multicarousel/multi1.json`, method: 'GET' },
          { url: `/data/multicarousel/multi2.json`, method: 'GET' },
          { url: `/data/multicarousel/multi3.json`, method: 'GET' },
          { url: `/data/multicarousel/multi4.json`, method: 'GET' },
          { url: `/data/multicarousel/multi5.json`, method: 'GET' },
          { url: `/data/multicarousel/multi6.json`, method: 'GET' },
          { url: `/data/multicarousel/multi7.json`, method: 'GET' },
        ]}
      />
      <SectionHeader
        title={'마이 리얼 매거진'}
        subTitle={'여행 전 필독! 꿀 정보 대방출'}
      />
      <Carousel cardData={magazineData} options={magazine} />
      <SectionHeader title={'관광 명소'} />
      <Carousel
        cardData={spotData}
        options={{
          ...tagCityCarousel,
          customCardStyle: {
            border: 'none',
            boxShadow: '0 0 6px rgb(0 0 0 / 30%)',
          },
        }}
      />
      <SectionHeader
        title={'아워코딩트립 단독 역사 산책 🦉'}
        subTitle={'코딩 전 필독! 꿀 정보 대방출'}
        linkDesc={'더 보기>'}
        subLink={'/'}
      />
      <Carousel cardData={sliderData?.list} />
      <SectionHeader
        title={'전국 스냅 기획전 - 서울 📸'}
        subTitle={'최대 2만원 할인 & 보정본 추가 이벤트!'}
        linkDesc={'더 보기>'}
        subLink={'/'}
      />
      <Carousel cardData={sliderData?.list} />
      <SectionHeader
        title={'서울 실내 데이트 🌿'}
        subTitle={'시원한 곳에서 즐겁게 보내는 서울의 휴일'}
        linkDesc={'더 보기>'}
        subLink={'/'}
      />
      <Carousel cardData={sliderData?.list} />
    </CitiesPage>
  );
};

export default Cities;

const CitiesPage = styled.section``;

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  height: 350px;
  width: 100%;
  min-width: 1060px;
  overflow: hidden;
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-size: 100%;
  background-position: center 35%;
  background-repeat: no-repeat;
  z-index: -100;
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.Wrapper}
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%);
`;

const Header = styled.h2`
  padding-top: 50px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.pageHeaderSize};
  font-weight: 500;
  text-align: center;
  text-shadow: 0 1px 10px rgb(0 0 0 / 80%);
`;

const BreadCrumb = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

const Bold = styled.b`
  font-weight: 500;
`;

const Dummy = styled.div`
  height: 210px;
`;
