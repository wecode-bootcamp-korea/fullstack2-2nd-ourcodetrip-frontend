import React from 'react';
import styled, { css } from 'styled-components';

const ServiceButtons = ({ services, selectService, currentService }) => {
  return (
    <ServiceContainer>
      {services.map((services, idx) => (
        <ServiceBox
          key={idx}
          onClick={selectService.bind(this, services.id)}
          selected={services.id === currentService}
        >
          <IconContainer id={services.id} />
          <ServiceHeader>{services.name}</ServiceHeader>
        </ServiceBox>
      ))}
    </ServiceContainer>
  );
};

export default ServiceButtons;

const ServiceContainer = styled.div`
  ${({ theme }) => theme.flexCenterContainer}
  padding: 15px 15px 0;
  gap: 8px;
  min-width: 1060px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => theme.borders.basic};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ServiceBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 92px;
  width: 126px;
  ${({ selected }) => {
    return selected
      ? css`
          color: ${({ theme }) => theme.colors.primaryBlue};
          border-bottom: ${({ theme }) => theme.borders.select};
        `
      : css`
          color: ${({ theme }) => theme.colors.darkGray};
          border-bottom: ${({ theme }) => theme.borders.unselect};
        `;
  }}
  transition: border-bottom 0.1s;
  cursor: pointer;

  &:hover {
    border-bottom: ${({ theme }) => theme.borders.select};
  }
`;

const IconContainer = styled.div`
  margin-bottom: 8px;
  height: 44px;
  width: 44px;
  background-image: url(${({ id }) => '/images/service-' + id + '.png'});
  background-position: center;
  background-size: cover;
`;

const ServiceHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  letter-spacing: -1px;
`;
