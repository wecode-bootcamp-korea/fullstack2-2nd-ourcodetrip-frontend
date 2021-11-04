import React, { useState } from 'react';
import styled from 'styled-components';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { TextField } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const DatePickerBox = ({ price }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  };

  const handleChange = event => {
    setNumberOfPeople(event.target.value);
    getTotalPrice(event.target.value);
  };

  const getTotalPrice = value => {
    const sum = value * price;
    setTotalPrice(sum);
  };

  const showPriceBox = () => {
    if (totalPrice > 0) setShowTotalPrice(true);
  };

  const getReady = () => {
    alert('준비중입니다.');
  };

  return (
    <DatePicker>
      <Title>옵션 선택</Title>
      <ChoiceContainer>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            value={startDate}
            inputFormat={'yyyy년 MM월 dd일'}
            mask={'____-__-__'}
            onChange={newValue => {
              setStartDate(newValue);
            }}
            renderInput={params => <TextField {...params} />}
          />
        </LocalizationProvider>

        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel id="demo-simple-select-label">
            인원을 선택해주세요.
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={numberOfPeople}
            label="인원을 선택해주세요"
            onChange={handleChange}
          >
            <MenuItem value={1}>1명</MenuItem>
            <MenuItem value={2}>2명</MenuItem>
            <MenuItem value={3}>3명</MenuItem>
            <MenuItem value={4}>4명</MenuItem>
          </Select>
        </FormControl>

        <PriceButton onClick={showPriceBox}>금액 조회하기</PriceButton>
      </ChoiceContainer>

      <SelectedOptionContainer showPrice={showTotalPrice}>
        <SelectedOption>
          <div>
            {new Intl.DateTimeFormat('ko-KR', options).format(startDate)}
          </div>
          <div>
            <span>
              {numberOfPeople} x {price}원
            </span>
            <span>{new Intl.NumberFormat('ko-KR').format(totalPrice)}원</span>
          </div>
        </SelectedOption>

        <TotalPrice>
          <span>총 여행 금액</span>
          <span>{new Intl.NumberFormat('ko-KR').format(totalPrice)}원</span>
        </TotalPrice>
      </SelectedOptionContainer>
      <PayButton showPrice={showTotalPrice} onClick={getReady}>
        예약하기
      </PayButton>
    </DatePicker>
  );
};

export default DatePickerBox;

const DatePicker = styled.div`
  display: flex;
  flex-flow: wrap column;
`;

const Title = styled.h2`
  margin: 16px 0;
  color: #343a40;
  font-size: 22px;
  font-weight: 700;
`;

const ChoiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceButton = styled.button`
  align-self: flex-end;
  width: 220px;
  height: 54px;
  padding: 10px;
  border: 1px solid #51abf3;
  border-radius: 5px;
  color: #ffffff;
  background-color: #51abf3;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background-color: #2b96ec;
  }
`;

const SelectedOptionContainer = styled.div`
  display: ${({ showPrice }) => (showPrice ? 'flex' : 'none')};
  flex-direction: column;
  padding: 15px;
  margin-top: 20px;
  background-color: #f5f6f7;
`;

const SelectedOption = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  border-bottom: 1px solid #dee2e6;
  color: #848c94;

  span:last-child {
    margin-left: 30px;
    color: #495055;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: right;
  padding: 25px 0;

  span:first-child {
    color: #495055;
    font-size: 14px;
    font-weight: 600;
  }

  span:last-child {
    margin-left: 15px;
    color: #2b96ec;
    font-size: 20px;
    font-weight: 700;
  }
`;

const PayButton = styled.button`
  display: ${({ showPrice }) => (showPrice ? 'block' : 'none')};
  align-self: flex-end;
  margin: 16px 0 50px 0;
  width: 170px;
  height: 50px;
  padding: 10px;
  border: 1px solid #51abf3;
  border-radius: 5px;
  color: #ffffff;
  background-color: #51abf3;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background-color: #2b96ec;
  }
`;
