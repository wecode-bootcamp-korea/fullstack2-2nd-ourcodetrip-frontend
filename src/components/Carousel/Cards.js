import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled, { css } from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsLightningChargeFill } from 'react-icons/bs';
import { HiBadgeCheck } from 'react-icons/hi';
import { ApiCall } from '../../utils/ApiCall';
import { API_ENDPOINT } from '../../api';

const Cards = ({
  type,
  id,
  imgUrl,
  category,
  region,
  city,
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
  hold,
  uniquePath,
}) => {
  const [imageReady, setImageReady] = useState(false);
  const [likeButtonClicked, setlikeButtonClicked] = useState(onUsersWishList);
  const hoverEffectRef = useRef();
  const history = useHistory();

  const likeButtonApiCall = id => {
    ApiCall(`${API_ENDPOINT}/users/wishlist/${id}`, 'POST');
  };

  useEffect(() => {
    hoverEffectRef.current.addEventListener('mouseover', hoverEffect);
    return hoverEffectRef.current.removeEventListener('mouseover', hoverEffect);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imageLoader = () => {
    const img = new window.Image();
    img.src = imgUrl;
    img.onload = () => {
      setImageReady(true);
    };
  };

  useEffect(() => {
    if (hold) return;
    if (
      currentSlide + 1 !== slideNumber &&
      type === 'carousel' &&
      !options.autoSliding
    )
      return;
    imageLoader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, hold]);

  const hoverEffect = event => {
    event.target.classList.add('hover');
  };

  const removeHoverEffect = event => {
    event.target.classList.remove('hover');
  };

  const {
    customCardStyle = null,
    imagePosition,
    showOptionalTickets,
    showContent,
    showLikeButton,
  } = options;

  return (
    <Card
      type={type}
      options={options}
      onClick={() => {
        history.push(uniquePath || `/tourticket/${id}`);
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
              <div className="categoryRegion">{`${category} ・ ${
                city || region
              }`}</div>
              <div className="textWrap">
                <h3>{title}</h3>
              </div>
            </div>
            <div className="cardFooter">
              {totalReviews ? (
                <Rating>
                  <span className="ratingStars">
                    {displayRatingToStars(rating, {
                      marginRight: 0,
                      color: '#51ABF3',
                      fontSize: '12px',
                    })}
                  </span>
                  <span className="totalReviews">{totalReviews}</span>
                </Rating>
              ) : (
                <RatingAlternative>
                  <i>
                    <HiBadgeCheck />
                  </i>
                  <span>후기 이벤트</span>
                </RatingAlternative>
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
                {salesUnit && (
                  <span className="salesUnit">{' / ' + salesUnit}</span>
                )}
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
            likeButtonApiCall(id);
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
  ${({ options }) => {
    const { cardWidth } = options;
    return css`
      min-width: ${cardWidth}px;
      width: ${cardWidth}px;
    `;
  }};
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.basic};
  border-radius: ${({ theme }) => theme.borders.basicRadius};
  list-style: none;
  transition: transform 0.1s, box-shadow 0.2s;
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
    transform: ${({ type, options }) => {
      return type === 'carousel' && !options.autoSliding
        ? 'translateY(-3px)'
        : 'none';
    }};
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
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orange};
    font-size: ${({ theme }) => theme.fontSizes.xs};
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
      color: ${({ theme }) => theme.colors.gray_1};
      font-size: ${({ theme }) => theme.fontSizes.small};
      font-weight: 300;
    }

    h3 {
      display: -webkit-box;
      line-height: 1.6;
      height: 44px;
      font-size: ${({ theme }) => theme.fontSizes.base};
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .cardFooter {
    position: relative;

    .pricing {
      position: relative;

      .price {
        margin-right: 5px;
        color: ${({ theme }) => theme.colors.gray_1};
        font-size: ${({ theme }) => theme.fontSizes.small};
        text-decoration: line-through;
      }

      .offerPrice {
        color: ${({ theme }) => theme.colors.gray_2};
        font-size: ${({ theme }) => theme.fontSizes.base};
        font-weight: 500;
      }

      .salesUnit {
        color: ${({ theme }) => theme.colors.gray_1};
        font-size: ${({ theme }) => theme.fontSizes.underBase};
      }

      .quickBooking {
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        color: ${({ theme }) => theme.colors.gray_1};
        font-size: ${({ theme }) => theme.fontSizes.small};
      }
    }
  }
`;

const Rating = styled.div`
  margin-bottom: 6px;

  .totalReviews {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.gray_1};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

const RatingAlternative = styled.div`
  ${({ theme }) => theme.flexCenterContainer};
  justify-content: flex-start;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.primaryBlue};

  i {
    margin-right: 2px;
    font-size: ${({ theme }) => theme.fontSizes.base};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.small};
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
    filter: drop-shadow(${({ theme }) => theme.shadow.heart});
  }

  &:hover > * {
    transform: scale(1.3);
  }
`;

const CircularProgressContainer = styled.div`
  ${({ theme }) => theme.flexCenterContainer}
  height: 100%;
`;
