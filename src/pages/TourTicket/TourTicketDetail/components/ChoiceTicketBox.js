import React from 'react';
import styled from 'styled-components';
import TicketOption from './TicketOption';

const ChoiceTicketBox = ({
  options,
  valid,
  onDecrease,
  onIncrease,
  totalPrice,
}) => {
  return (
    <TicketContainer>
      <OptionTitle>티켓 선택</OptionTitle>
      <BoxContainer>
        {options &&
          options.map((option, idx) => {
            return (
              <TicketOption
                key={idx}
                id={option.id}
                productName={option.name}
                valid={valid}
                price={option.price.toLocaleString()}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                amount={option.amount}
              />
            );
          })}

        {options &&
          options.map((option, idx) => {
            return option.amount <= 0 ? null : (
              <SelectedOption key={idx}>
                <div>{option.name}</div>
                <div>
                  <span>
                    {option.amount} x {option.price.toLocaleString()}원
                  </span>
                  <SelectedTotalPrice>
                    {Number(option.amount * option.price).toLocaleString()}원
                  </SelectedTotalPrice>
                </div>
              </SelectedOption>
            );
          })}
        {totalPrice !== 0 && (
          <TotalPrice>
            <span>총 여행 금액</span>
            <span>{new Intl.NumberFormat('ko-KR').format(totalPrice)}원</span>
          </TotalPrice>
        )}
      </BoxContainer>
      {totalPrice !== 0 && <PayButton>결제하기</PayButton>}
    </TicketContainer>
  );
};

export default ChoiceTicketBox;

const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionTitle = styled.h2`
  margin: 16px 0;
  color: #343a40;
  font-size: 22px;
  font-weight: 700;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #f5f6f7;
`;

const SelectedOption = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  border-bottom: 1px solid #dee2e6;
  color: #848c94;
`;

const SelectedTotalPrice = styled.span`
  margin-left: 30px;
  color: #495055;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 25px;

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
