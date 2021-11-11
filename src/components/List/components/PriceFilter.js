import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';
import { useTourTicket } from '../../../hooks/tourTicketHook';
import { useFiltering } from '../../../hooks/filteringHook';

const PriceFilter = ({ min = 1000, max = 200000, initCommand }) => {
  const [value, setValue] = useState([min, max]);
  const { setTourTicketSorting } = useTourTicket();
  const { setIsFilterActive } = useFiltering();

  const minDistance = 5000;
  const sliderRef = useRef(null);

  function valuetext(value) {
    return `${value}`;
  }

  useEffect(() => {
    setValue([min, max]);
  }, [initCommand, min, max]);

  const requestFiltering = () => {
    const [minPrice, maxPrice] = value;
    setTourTicketSorting({
      criteria: 'price',
      value: `${minPrice}-${maxPrice}`,
    });
    setIsFilterActive(true);
  };

  const handleChange = (_, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <PriceFilterContainer>
      <HeaderContainer>
        <Header>가격대</Header>
        <PriceRangeIndicator>
          {value[0]}원 - {value[1]}원
        </PriceRangeIndicator>
      </HeaderContainer>
      <SliderContainer>
        <Slider
          ref={sliderRef}
          min={min}
          max={max}
          step={1000}
          getAriaLabel={() => 'Minimum distance'}
          value={value}
          onChange={handleChange}
          onChangeCommitted={requestFiltering}
          getAriaValueText={valuetext}
          disableSwap
        />
      </SliderContainer>
    </PriceFilterContainer>
  );
};

export default PriceFilter;

const PriceFilterContainer = styled.div`
  ${({ theme }) => theme.FilterContainer}
  ${({ theme }) => theme.flexCenterContainer}
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  margin-bottom: 18px;
  width: 100%;
`;

const Header = styled.h3`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
`;

const PriceRangeIndicator = styled.p`
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: ${({ theme }) => theme.fontSizes.underBase};
`;

const SliderContainer = styled.div`
  width: 190px;

  & .MuiSlider-rail {
  }

  & .MuiSlider-track {
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    border: none;
  }

  & .MuiSlider-thumb {
    height: 25px;
    width: 25px;
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    border: 6px solid ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadow.slider};
  }
`;
