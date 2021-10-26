import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsLightningChargeFill } from 'react-icons/bs';

const Cards = ({
  id,
  imgUrl,
  category,
  region,
  title,
  rating,
  totalReviews,
  price,
  offerPrice,
  salesUnit,
  onUsersWishList,
  guaranteedLowestPrice,
  quickBooking,
  displayRatingToStars,
  options,
  slideNumber,
  currentSlide,
  // history,
}) => {
  const hoverEffectRef = useRef();
  const history = useHistory();

  useEffect(() => {
    hoverEffectRef.current.addEventListener('mouseover', hoverEffect);
    return hoverEffectRef.current.removeEventListener('mouseover', hoverEffect);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [imageReady, setImageReady] = useState(false);
  const [likeButtonClicked, setlikeButtonClicked] = useState(onUsersWishList);

  const imageLoader = () => {
    const img = new window.Image();
    img.src = imgUrl;
    img.onload = () => {
      setImageReady(true);
    };
  };

  useEffect(() => {
    if (currentSlide + 1 !== slideNumber) return;
    imageLoader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const hoverEffect = event => {
    event.target.classList.add('hover');
  };

  const removeHoverEffect = event => {
    event.target.classList.remove('hover');
  };

  const {
    customCardStyle,
    imagePosition,
    showOptionalTickets,
    showContent,
    showLikeButton,
  } = options;

  return (
    <Card
      options={options}
      onClick={() => {
        alert(`[임시] 상품페이지로 이동합니다\n?id=${id}&category=${category}`);
        history.push(`/detail/${id}`);
      }}
      className="Card"
      onMouseEnter={hoverEffect}
      onMouseLeave={removeHoverEffect}
      ref={hoverEffectRef}
      style={customCardStyle || ''}
    >
      <dl>
        <ImageContainer options={options}>
          {imageReady ? (
            <Image
              imgUrl={imgUrl}
              imageReady={imageReady}
              imagePosition={imagePosition}
            />
          ) : (
            <CircularProgressContainer>
              <CircularProgress />
            </CircularProgressContainer>
          )}
          {guaranteedLowestPrice && showOptionalTickets ? (
            <div className="lowestPrice">최저가 보장제</div>
          ) : null}
        </ImageContainer>
        {showContent ? (
          <InfoContainer options={options}>
            <div className="cardHeader">
              <div className="categoryRegion">{`${category} ・ ${region}`}</div>
              <div className="textWrap">
                <h3>{title}</h3>
              </div>
            </div>
            <div className="cardFooter">
              {totalReviews ? (
                <div className="rating">
                  <span className="ratingStars">
                    {displayRatingToStars(rating, {
                      marginRight: 0,
                      color: '#51ABF3',
                      fontSize: '12px',
                    })}
                  </span>
                  <span className="totalReviews">{totalReviews}</span>
                </div>
              ) : (
                <div className="ratingAlternative">
                  <i>&</i>
                  <span>후기 이벤트</span>
                </div>
              )}
              <div className="pricing">
                {price ? (
                  <span className="price">
                    {new Intl.NumberFormat('ko-KR').format(price)}원
                  </span>
                ) : null}
                <span className="offerPrice">
                  {new Intl.NumberFormat('ko-KR').format(offerPrice)}원
                </span>
                <span className="salesUnit">{' / ' + salesUnit}</span>
                {quickBooking && showOptionalTickets ? (
                  <span className="quickBooking">
                    <i>
                      <BsLightningChargeFill style={{ color: '#FFBF01' }} />
                    </i>
                    즉시확정
                  </span>
                ) : null}
              </div>
            </div>
          </InfoContainer>
        ) : null}
      </dl>
      {showLikeButton ? (
        <LikeButton
          className="likeButton"
          onClick={event => {
            event.stopPropagation();
            setlikeButtonClicked(!likeButtonClicked);
            alert(
              `[임시] 위시리스트 버튼을 눌렀습니다.\n?id=${id}&region=${region}`
            );
          }}
        >
          {likeButtonClicked ? <FaHeart /> : <FaRegHeart />}
        </LikeButton>
      ) : null}
    </Card>
  );
};

export default Cards;

const Card = styled.li`
  position: relative;
  min-width: ${({ options }) => {
    const value = options.cardWidth;
    return value;
  }}px;
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.basic};
  border-radius: ${props => props.theme.borders.basicRadius};
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 1000;
  }

  &.hover {
    box-shadow: ${({ theme }) => theme.shadow.button};
    transform: translateY(-2px);
  }
`;

const ImageContainer = styled.dt`
  position: relative;
  height: ${({ options }) => options.cardImageHeight}px;
  overflow: hidden;

  .lowestPrice {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 28px;
    width: 80px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.orange};
    font-size: ${props => props.theme.fontSizes.xs};
    text-align: center;
    line-height: 28px;
  }
`;

const Image = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_3};
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: ${({ imageReady }) => (imageReady ? 'cover' : 'contain')};
  background-repeat: no-repeat;
  background-position: ${({ imagePosition }) => imagePosition || 'center'};
`;

const InfoContainer = styled.dd`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  height: ${({ options }) => options.cardContentHeight}px;

  .cardHeader {
    .categoryRegion {
      padding-bottom: 4px;
      color: ${props => props.theme.colors.gray_1};
      font-size: ${props => props.theme.fontSizes.small};
      font-weight: 300;
    }

    h3 {
      display: -webkit-box;
      line-height: 1.5;
      height: 44px;
      font-size: ${props => props.theme.fontSizes.base};
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      -webkit-line-clamp: 2;
      -moz-box-orient: vertical;
    }
  }

  .cardFooter {
    position: relative;

    .rating {
      margin-bottom: 6px;

      .totalReviews {
        margin-left: 5px;
        color: ${props => props.theme.colors.gray_1};
        font-size: ${props => props.theme.fontSizes.small};
      }
    }

    .pricing {
      position: relative;

      .price {
        margin-right: 5px;
        color: ${props => props.theme.colors.gray_1};
        font-size: ${props => props.theme.fontSizes.small};
        text-decoration: line-through;
      }

      .offerPrice {
        color: ${props => props.theme.colors.gray_2};
        font-size: ${props => props.theme.fontSizes.base};
        font-weight: 500;
      }

      .salesUnit {
        color: ${props => props.theme.colors.gray_1};
        font-size: ${props => props.theme.fontSizes.underBase};
      }

      .quickBooking {
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        color: ${props => props.theme.colors.gray_1};
        font-size: ${props => props.theme.fontSizes.small};
      }
    }
  }
`;

const LikeButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2000;
  cursor: pointer;

  & > * {
    color: #ffffff;
    font-size: 18px;
    transition: transform 0.2s;
  }

  &:hover > * {
    transform: scale(1.3);
  }
`;

const CircularProgressContainer = styled.div`
  ${({ theme }) => theme.flexCenterContainer}
  height: 100%;
`;
