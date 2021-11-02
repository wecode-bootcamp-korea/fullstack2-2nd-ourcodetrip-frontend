import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import tourTicketHook from '../../../hooks/tourTicketHook';
import filteringHook from '../../../hooks/filteringHook';

const DateFilter = ({ initCommand }) => {
  const [values, setValues] = useState([null, null]);
  const { setTourTicketSorting } = tourTicketHook();
  const { setIsFilterActive } = filteringHook();

  useEffect(() => {
    if (!values[0] || !values[1]) return;
    const result = values
      .map(ele => {
        const selectedDate = new Date(ele);
        const year = '' + selectedDate.getFullYear();
        const month = '' + (selectedDate.getMonth() + 1);
        const date = '' + selectedDate.getDate();
        return `${year}/${month.padStart(2, '0')}/${date.padStart(2, '0')}`;
      })
      .join('-');
    setTourTicketSorting({ criteria: 'availableDate', value: result });
    setIsFilterActive(true);
  }, [setTourTicketSorting, setIsFilterActive, values]);

  useEffect(() => {
    setValues([null, null]);
  }, [initCommand]);

  return (
    <DateFilterContainer>
      <Header>일정</Header>
      <DatePickerContainer>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            inputFormat={'yyyy/MM/dd'}
            mask={'____-__-__'}
            startText={'시작일'}
            endText={'종료일'}
            value={values}
            allowSameDateSelection={true}
            calendars={1}
            minDate={Date.now()}
            onChange={newValue => {
              setValues(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <div style={{ display: 'flex' }}>
                <StyledTextField
                  {...startProps}
                  variant="standard"
                  margin="dense"
                />
                <StyledTextField
                  {...endProps}
                  variant="standard"
                  margin="dense"
                />
              </div>
            )}
          />
        </LocalizationProvider>
      </DatePickerContainer>
    </DateFilterContainer>
  );
};

export default DateFilter;

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#2B95EC',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#2B95EC',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#2B95EC',
  },
  '& .MuiInputLabel-root': {
    marginLeft: '3px',
    color: '#2B95EC',
    backgroundColor: '#fcfcfc',
    fontSize: '14px',
    fontWeight: 500,
  },
});

const DateFilterContainer = styled.div`
  ${({ theme }) => theme.FilterContainer}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const DatePickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.h3`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
`;
