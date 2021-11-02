import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import tourTicketHook from '../../../hooks/tourTicketHook';
import filteringHook from '../../../hooks/filteringHook';

const RatingFilter = ({ initCommand }) => {
  const [value, setValue] = useState('');

  const { setTourTicketSorting } = tourTicketHook();
  const { setIsFilterActive } = filteringHook();

  const radioGroupRef = useRef(null);

  const handleChange = event => {
    setValue(event.target.value);
    setTourTicketSorting({
      criteria: 'reviewScore',
      value: event.target.value,
    });
    setIsFilterActive(true);
  };

  useEffect(() => {
    setValue('');
  }, [initCommand]);

  return (
    <RatingFilterContainer>
      <Header>평점</Header>
      <RadioContainer>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="minimum-rating"
            // defaultValue="all"
            value={value}
            name="radio-buttons-group"
            onChange={handleChange}
          >
            <FormControlLabel
              value=""
              control={
                <Radio
                  checked={value === ''}
                  inputRef={radioGroupRef}
                  style={{
                    color: '#2B95EC',
                    padding: '7px 10px',
                  }}
                />
              }
              label="전체"
            />
            <FormControlLabel
              value="4~"
              control={
                <Radio
                  checked={value === '4~'}
                  style={{ color: '#2B95EC', padding: '7px 10px' }}
                />
              }
              label="4점 이상"
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  checked={value === '5'}
                  style={{ color: '#2B95EC', padding: '7px 10px' }}
                />
              }
              label="5점만"
            />
          </RadioGroup>
        </FormControl>
      </RadioContainer>
    </RatingFilterContainer>
  );
};

export default RatingFilter;

const RatingFilterContainer = styled.div`
  ${({ theme }) => theme.FilterContainer}
`;

const Header = styled.h3`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
`;

const RadioContainer = styled.div`
  .MuiTypography-root {
    color: ${({ theme }) => theme.colors.gray_2};
    font-size: 14px;
  }
`;
