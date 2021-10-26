import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { GrPrevious, GrNext } from 'react-icons/gr';

import Cards from './Cards';
import CarouselSkeleton from './Skeleton/CarouselSkeleton';
import displayRatingToStars from '../../utils/displayRatingToStars';
import { defaultOptions } from './defaultOptions';

const Carousel = ({ cardData = [], options = defaultOptions }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);
  const [lastSliding, setlastSliding] = useState(0);

  useEffect(() => {
    const { slideWidth, displayNumber, cardWidth, cardSpacing } = options;
    setMaxSlide(Math.ceil(cardData.length / displayNumber));
    setlastSliding(
      !(cardData.length % displayNumber)
        ? 0
        : slideWidth -
            (cardData.length % displayNumber) * (cardWidth + cardSpacing) +
            cardSpacing
    );
  }, [cardData, options]);

  const nextSlide = useCallback(() => {
    if (currentSlide >= maxSlide - 1) {
      options.autoSliding && setCurrentSlide(0);
      return;
    }
    setCurrentSlide(currentSlide + 1);
  }, [currentSlide, maxSlide, options]); // 특정 state가 바뀌면 다시 함수를 정의하기 위해서 ? 비용을 줄이고자 (최적화 관점)

  const prevSlide = () => {
    if (currentSlide <= 0) {
      options.autoSliding && setCurrentSlide(maxSlide - 1);
      return;
    }
    setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    // 사이드 이펙트가 발생할 시점을 작성해주어야 한다. (부차적 효과의 관리) 언제?
    const { autoSliding, slideTiming } = options;
    if (!autoSliding) return;
    const interval = setInterval(() => {
      nextSlide();
    }, slideTiming * 1000);
    return () => clearInterval(interval);
  }, [options, nextSlide]);

  return (
    <Wrapper>
      <div className="sliderContainer">
        {!cardData.length ? (
          <CarouselSkeleton />
        ) : (
          <Slider
            currentSlide={currentSlide}
            lastSliding={currentSlide === maxSlide - 1 && lastSliding}
            options={options}
          >
            {cardData.map((data, idx) => {
              return (
                <Cards
                  key={data.id || idx}
                  slideNumber={Math.ceil((idx + 1) / options.displayNumber)}
                  options={options}
                  displayRatingToStars={displayRatingToStars}
                  currentSlide={currentSlide}
                  {...data}
                />
              );
            })}
          </Slider>
        )}
      </div>
      {options.showController && cardData.length ? (
        <Controller>
          {currentSlide !== 0 || options.autoSliding ? (
            <button className="prev" onClick={prevSlide}>
              <GrPrevious />
            </button>
          ) : null}

          {currentSlide < maxSlide - 1 || options.autoSliding ? (
            <button className="next" onClick={nextSlide}>
              <GrNext />
            </button>
          ) : null}
        </Controller>
      ) : null}
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.article`
  position: relative;
  ${({ theme }) => theme.Wrapper}

  & > .sliderContainer {
    padding: 10px 0;
    height: 100%;
    overflow: hidden;
  }
`;

const Slider = styled.ul`
  display: flex;
  gap: ${({ options }) => options.cardSpacing}px;
  transform: translateX(
    -${({
        currentSlide,
        lastSliding,
        options: { slideWidth, cardSpacing },
      }) => {
        return currentSlide * (slideWidth + cardSpacing) - lastSliding;
      }}px
  );
  transition: transform 0.5s;
`;

const Controller = styled.div`
  button {
    position: absolute;
    top: 45%;
    height: 40px;
    width: 40px;
    line-height: 52px;
    border: none;
    border-radius: 100px;
    background: none;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadow.button};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadow.hover};
      transition: box-shadow 0.3s;
    }

    &.prev {
      left: -20px;
      padding-right: 2px;
    }

    &.next {
      right: -20px;
      padding-left: 2px;
    }

    & > * {
      color: ${({ theme }) => theme.colors.white};
      font-size: 20px;
    }
  }
`;
