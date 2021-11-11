import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import DateFilter from './components/DateFilters';
import PriceFilter from './components/PriceFilter';
import RatingFilter from './components/RatingFilter';
import ConfirmTypeFilter from './components/ConfirmTypeFilter';
import { useFiltering } from '../../hooks/filteringHook';
import { useTourTicket } from '../../hooks/tourTicketHook';

const ListFilter = ({ priceRange = [1000, 100000] }) => {
  const [initCommand, setInitCommand] = useState(false);
  const { isFilterActive, setIsFilterActive } = useFiltering();
  const { setInitialAction } = useTourTicket();

  const initializing = () => {
    const isFilterActiveInLocalStorage = JSON.parse(
      JSON.parse(localStorage.getItem('persist:root')).filteringReducer
    ).isFilterActive;
    if (!isFilterActiveInLocalStorage) return;
    setInitialAction();
    setInitCommand(true);
    setIsFilterActive(false);
    // setQuery('');
  };

  useEffect(() => {
    setInitCommand(false);
  }, [isFilterActive]);

  return (
    <ListFilterContainer>
      <HeaderBox>
        <Header>필터</Header>
        <InitButton onClick={initializing} activeInit={isFilterActive}>
          초기화
        </InitButton>
      </HeaderBox>
      <FilterContainer>
        <DateFilter initCommand={initCommand} />
        <PriceFilter
          initCommand={initCommand}
          min={priceRange[0]}
          max={priceRange[1]}
        />
        <RatingFilter initCommand={initCommand} />
        <ConfirmTypeFilter initCommand={initCommand} />
      </FilterContainer>
    </ListFilterContainer>
  );
};

export default ListFilter;

const ListFilterContainer = styled.div`
  min-height: 542px;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 21px;
`;

const Header = styled.h3`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 500;
`;

const InitButton = styled.button`
  color: ${({ theme, activeInit }) =>
    activeInit ? theme.colors.primaryBlue : '#ced4da'};
  background: none;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  border: none;
`;

const FilterContainer = styled.div`
  background-color: white;
  border: ${({ theme }) => theme.borders.light};
  border-radius: 6px;
`;
