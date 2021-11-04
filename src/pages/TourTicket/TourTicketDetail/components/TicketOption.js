import React from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';

const TicketOption = ({
  id,
  productName,
  price,
  valid,
  amount,
  onIncrease,
  onDecrease,
}) => {
  return (
    <Container>
      <OptionTitle>
        <OptionName>{productName}</OptionName>
        <OptionValid>{valid}</OptionValid>
      </OptionTitle>
      <PriceButtonWrapper>
        <OptionPrice>
          <span>1명</span>
          <span>{price}</span>
          <span>원</span>
        </OptionPrice>
        <OptionButtonWrapper>
          <OptionButton id={id} amount={amount} onClick={() => onDecrease(id)}>
            <FaMinus />
          </OptionButton>
          <span id={id}>{amount}</span>
          <OptionButton id={id} onClick={() => onIncrease(id)}>
            <FaPlus />
          </OptionButton>
        </OptionButtonWrapper>
      </PriceButtonWrapper>
    </Container>
  );
};

export default TicketOption;

const Container = styled.div`
  display: flex;
  margin-bottom: 8px;
  padding: 32px 24px;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 8px 0 #cccccc;
`;

const OptionTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const OptionName = styled.h3`
  margin-bottom: 8px;
  color: #343a40;
  font-size: 16px;
  font-weight: 600;
`;

const OptionValid = styled.h4`
  display: flex;
  color: #bbbbbb;
  font-size: 14px;
`;

const PriceButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const OptionPrice = styled.div`
  display: flex;
  align-items: center;
  margin-right: 48px;

  span:first-child {
    color: #adb5bd;
    margin-right: 4px;
    font-size: 13px;
  }

  span:nth-child(2) {
    font-size: 20px;
    font-weight: 700;
  }

  span:nth-child(3) {
    font-size: 15px;
  }
`;

const OptionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    width: 32px;
    text-align: center;
  }
`;

const OptionButton = styled.button`
  ${({ theme }) => theme.flexCenterContainer}
  width: 32px;
  height: 32px;
  border: 1px solid ${({ amount }) => (amount <= 0 ? '#CED4DA' : '#51abf3')};
  border-radius: 50%;
  color: ${({ amount }) => (amount <= 0 ? '#CED4DA' : '#51abf3')};
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ amount }) => (amount <= 0 ? '#ffffff' : '#f5fbff')};
  }
`;
