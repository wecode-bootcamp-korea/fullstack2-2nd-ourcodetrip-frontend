import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import { BsLightningChargeFill } from 'react-icons/bs';
import { useTourTicket } from '../../../hooks/tourTicketHook';
import { useFiltering } from '../../../hooks/filteringHook';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ConfirmTypeFilter = ({ initCommand }) => {
  const [value, setValue] = useState(false);

  const { setTourTicketSorting } = useTourTicket();
  const { setIsFilterActive } = useFiltering();

  const handleChange = event => {
    setValue(event.target.checked);
    setIsFilterActive(true);
    setTourTicketSorting({
      criteria: 'confirm_type',
      value: event.target.checked ? true : '',
    });
  };

  useEffect(() => {
    setValue(false);
  }, [initCommand]);

  return (
    <ConfirmTypeFilterContainer>
      <CheckboxContainer>
        <Checkbox
          onChange={handleChange}
          {...label}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 28,
              color: '#2B95EC',
            },
          }}
          checked={value}
        />
      </CheckboxContainer>
      <HeaderContainer>
        <Header>
          즉시확정 상품만 보기
          <BsLightningChargeFill
            style={{ marginLeft: '4px', color: '#127B5E' }}
          />
        </Header>
        <Desc>결제 후 바로 예약이 확정되는 상품</Desc>
      </HeaderContainer>
    </ConfirmTypeFilterContainer>
  );
};

export default ConfirmTypeFilter;

const ConfirmTypeFilterContainer = styled.div`
  ${({ theme }) => theme.flexCenterContainer};
  justify-content: flex-start;
  margin: 0 auto;
  padding: 24px 0 23px;
  width: 216px;
`;

const Header = styled.h3`
  margin-bottom: 7px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  letter-spacing: -0.5px;
`;

const HeaderContainer = styled.div``;

const CheckboxContainer = styled.div`
  & span {
    padding-left: 0;
  }
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
