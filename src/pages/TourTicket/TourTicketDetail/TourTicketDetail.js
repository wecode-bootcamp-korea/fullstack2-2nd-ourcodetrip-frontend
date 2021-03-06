import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  BsInfoCircle,
  BsFillLightningChargeFill,
  BsCalendarCheck,
  BsGlobe,
} from 'react-icons/bs';
import { MdPlace, MdMobileFriendly, MdTour } from 'react-icons/md';
import FloatingBox from './components/FloatingBox';
import ProductInfo from './components/ProductInfo';
import ReviewPhoto from './components/ReviewPhoto';
import ScrollTab from './components/ScrollTab';
import ChoiceTicketBox from './components/ChoiceTicketBox';
import DatePickerBox from './components/DatePickerBox';
import ReviewBoard from '../../../components/Boards/ReviewBoard/ReviewBoard';
import { API_ENDPOINT } from '../../../api';

const TourTicketDetail = () => {
  const [wishButton, setWishButton] = useState(false);
  const [wishCount, setWishCount] = useState(12345);
  const [showScrollTab, setShowScrollTab] = useState(false);
  const [data, setData] = useState('');
  const [options, setOptions] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const multipleRefs = {
    ticket: useRef(),
    product: useRef(),
    info: useRef(),
    refund: useRef(),
    review: useRef(),
  };

  const { id } = useParams();

  const handleWish = () => {
    setWishButton(!wishButton);
    wishButton ? setWishCount(wishCount - 1) : setWishCount(wishCount + 1);
  };

  const showTab = () => {
    const DETAIL_NAV_SCROLLY_THRESHOLD = 400;
    setShowScrollTab(window.scrollY > DETAIL_NAV_SCROLLY_THRESHOLD);
  };

  const onIncrease = e => {
    const currentOptions = [...options];
    for (let option in currentOptions) {
      if (e === currentOptions[option].id) {
        currentOptions[option].amount = currentOptions[option].amount + 1;
        setOptions(currentOptions);
        getTotalPrice(currentOptions);
      }
    }
  };

  const onDecrease = e => {
    const currentOptions = [...options];
    for (let option in currentOptions) {
      if (e === currentOptions[option].id) {
        if (currentOptions[option].amount > 0) {
          currentOptions[option].amount = currentOptions[option].amount - 1;
          setOptions(currentOptions);
          getTotalPrice(currentOptions);
        }
      }
    }
  };

  const getTotalPrice = options => {
    const sum = options.reduce((acc, cur) => acc + cur.price * cur.amount, 0);
    setTotalPrice(sum);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    fetch(`${API_ENDPOINT}/products/${id}`)
      .then(res => res.json())
      .then(res => {
        setData(res.data);
        if (!res.data.TicketOption) return;
        const options = [...res.data.TicketOption];
        for (let option in options) {
          options[option].amount = 0;
        }
        setOptions(options);
      });
  }, [id]);

  useEffect(() => {
    window.addEventListener('scroll', showTab);
    return () => window.removeEventListener('scroll', showTab);
  });

  return (
    <>
      <Main>
        <Contents>
          <header>
            <HeaderLocation>
              <LocationSpan>{data && data.City.Country.name}</LocationSpan>
              <LocationSpan>{`>`}</LocationSpan>
              <LocationSpan>
                <MdPlace />
                {data && data.City.name}
              </LocationSpan>
            </HeaderLocation>
            <Title>{data && data.Product.name}</Title>
            <Tag>
              <BsFillLightningChargeFill />{' '}
              {data && data.Product.ProductOption[0].OptionList.name}
            </Tag>
            <ReviewPoint
              onClick={() => {
                multipleRefs.review.current.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              <ReviewScore>???????????????</ReviewScore>
              <ReviewScore>4.7</ReviewScore>
              {` `}
              <ReviewScore>{`(39)`}</ReviewScore>
              <ReviewScore>{'>'}</ReviewScore>
            </ReviewPoint>
          </header>

          <HeadContainer>
            <ProductSummary>
              <MdMobileFriendly /> <span>e-ticket</span>
            </ProductSummary>
            <ProductSummary>
              <BsCalendarCheck />
              <span>{`????????????(~12.31) ??? ??????`}</span>
            </ProductSummary>
            <ProductSummary>
              <BsGlobe />
              <span>?????????</span>
            </ProductSummary>
          </HeadContainer>

          <BoxItem>
            <span>
              {' '}
              <BsInfoCircle />
            </span>
            <BoxBody>
              <BoxTitle>???? ????????? ??????</BoxTitle>
              <ProductDescription>
                - ??? ????????? ??????/?????? ???????????? ????????? ??? ????????????.
                <br />- ??? ????????? ?????? ??? ???????????? ??? ????????? ????????? ??? ??????
                ???????????????. <br />- ???????????? ??? ???????????? ?????? ?????????
                ???????????????????????? ????????????/?????? ???????????????.
                <br />- ??????????????? ??????????????? ????????? ????????? ????????????
                '???????????????' ????????? ??????????????? ????????? ?????????????????? ????????????{' '}
                {'['}??????????????? ?????????{']'} ??? ??????????????????.
              </ProductDescription>
            </BoxBody>
          </BoxItem>

          <OptionBox ref={multipleRefs.ticket}>
            {data && data.Product.ProductType.name === '??????' ? (
              <ChoiceTicketBox
                valid={options && options.expireDate}
                options={options && options}
                setOptions={options && setOptions}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                totalPrice={totalPrice}
              />
            ) : (
              <DatePickerBox price={data && data.standardPrice} />
            )}
          </OptionBox>
          <ProductInfo
            productImage={data && data.Product.ProductImage}
            ref={multipleRefs.product}
          />
          <Information ref={multipleRefs.info}>
            <h2>?????? ??????</h2>
            <img
              src="http://drive.google.com/uc?export=view&id=14LRoJN0p-ji2MNFN1IrJb1Bj7DQBbiZ-"
              alt="use guide"
            />
            <br></br>
          </Information>
          <Refund ref={multipleRefs.refund}>
            <RefundTitle>?????? ??????</RefundTitle>
            <img
              src="http://drive.google.com/uc?export=view&id=1Na-XoLp0FOPqmy0hgiyFeEKXlUnkL09f"
              alt="ticketRefund"
            />

            <img
              src="http://drive.google.com/uc?export=view&id=1qoYGD0stnt0rgoXHUPZj4o0_Hq8BEBoM"
              alt="TourRefund"
            />
          </Refund>
          <PartnerInfo>
            <MdTour />
            <PartnerName>{data && data.Partner.name}</PartnerName>
            <div>{data && data.Partner.introduce}</div>
          </PartnerInfo>
          <ReviewPhoto ref={multipleRefs.review} />
          <ReviewBoard />
        </Contents>
        <FloatingBox
          wishButton={wishButton}
          handleWish={handleWish}
          wishCount={wishCount}
          ticketRef={multipleRefs.ticket}
          standardPrice={data && data.standardPrice}
          discountRate={data && data.discountRate}
          partner={data && data.Partner.name}
          productType={data && data.Product.ProductType}
        />
        {showScrollTab && (
          <ScrollTab
            multipleRefs={multipleRefs}
            productType={data && data.Product.ProductType}
          />
        )}
      </Main>
      {showScrollTab && <TabLine></TabLine>}
    </>
  );
};

export default TourTicketDetail;

const Main = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
  width: 1060px;
`;

const Contents = styled.div`
  width: 700px;
  margin-right: 40px;
`;

const HeaderLocation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #838c94;
`;

const LocationSpan = styled.span`
  display: flex;
  align-items: center;
  padding: 6px;

  &:nth-child(2n-1):hover {
    border-radius: 5px;
    background-color: #f5fbff;
  }
`;

const Title = styled.h1`
  margin: 10px 0;
  font-size: 32px;
  font-weight: 700;
`;

const Tag = styled.span`
  width: 70px;
  padding: 4px 8px;
  margin: 8px 0;
  border-radius: 5px;
  color: #147b5e;
  background-color: #e5f7f3;
  font-size: 13px;
  font-weight: 700;
`;

const ReviewPoint = styled.div`
  padding: 10px 0;
  margin-top: 20px;
  cursor: pointer;
`;

const ReviewScore = styled.span`
  &:first-child {
    color: #51abf3;
    margin-right: 4px;
  }

  &:nth-child(2) {
    font-weight: 600;
  }

  &:nth-child(3) {
    color: #848c94;
    margin-right: 4px;
  }

  &:last-child {
    color: #848c94;
    font-weight: 700;
  }
`;

const HeadContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 20px 0;
  border: 1px solid #e8ecef;
  border-width: 1px 0;
  font-size: 15px;
`;

const ProductSummary = styled.li`
  flex-basis: 1 500px;
  padding: 12px;
  width: 50%;

  span {
    margin-left: 10px;
  }
`;

const BoxItem = styled.div`
  display: flex;
  padding: 16px;
  margin: 20px 0;
  border: 1px solid #e8ecef;
  border-radius: 5px;

  span {
    justify-content: flex-start;
    margin-right: 10px;
    align-self: flex-start;
    width: 20px;
  }
`;

const BoxBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
`;

const ProductDescription = styled.p`
  line-height: 170%;
  font-size: 15px;
`;

const OptionBox = styled.section`
  margin-bottom: 30px;
`;

const Information = styled.div`
  border-bottom: 1px solid #e8ecef;
  padding: 30px 0;

  h2 {
    margin: 16px 0;
    color: #343a40;
    font-size: 22px;
    font-weight: 700;
  }
`;

const Refund = styled.div`
  border-bottom: 1px solid #e8ecef;
  padding: 30px 0;
`;

const RefundTitle = styled.h2`
  margin: 16px 0;
  color: #343a40;
  font-size: 22px;
  font-weight: 700;
`;

const PartnerInfo = styled.div`
  border-bottom: 1px solid #e8ecef;
  padding: 32px 0;

  div {
    margin-top: 15px;
    font-size: 14px;
  }
`;

const PartnerName = styled.span`
  margin: 16px 0 16px 8px;
  color: #343a40;
  font-size: 18px;
  font-weight: 700;
`;

const TabLine = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 52px;
  border-bottom: 1px solid #e7eaed;
  z-index: -10;
`;
