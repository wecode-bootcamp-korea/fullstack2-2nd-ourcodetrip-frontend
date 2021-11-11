import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useTourTicket } from '../../hooks/tourTicketHook';
import List from '../../components/List/List';
import ListFilter from '../../components/List/ListFilter';
import TourTicketCategory from './components/TourTicketCategory';
import { ApiCall } from '../../utils/ApiCall';

const TourTicketList = () => {
  const [listData, setListData] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [didInit, setDidInit] = useState(false);
  const { sortingCriteria } = useTourTicket();

  const mount = useRef(false);
  useEffect(() => {
    let criteria;
    if (!mount.current) {
      mount.current = true;
      const sortingCriteriaInLocalStorage = JSON.parse(
        JSON.parse(localStorage.getItem('persist:root')).tourTicketReducer
      ).sortingCriteria;
      criteria = sortingCriteriaInLocalStorage;
    } else {
      criteria = sortingCriteria;
    }
    const query = Object.entries(criteria)
      .filter(value => value[1] !== '')
      .map(value => value.join('='))
      .join('&');
    ApiCall(
      `http://localhost:8001/products/filter/offers?city=seoul&${query}`,
      'GET'
    ).then(({ data }) => {
      if (!didInit) {
        setPriceRange(getPriceRange(data));
        setDidInit(true);
      }
      setListData(data);
    });
  }, [sortingCriteria, didInit]);

  const getPriceRange = prodArr => {
    if (!prodArr) return;
    const prices = prodArr?.map(prod => {
      return prod.offerPrice;
    });
    const min = Math?.min(...prices);
    const max = Math?.max(...prices);
    return [min, max];
  };

  return (
    <PageWrapper>
      <PageHeader>서울의 투어・티켓</PageHeader>
      <ListContainer>
        <FilterContainer>
          <TourTicketCategory />
          {/* <ListFilter priceRange={priceRange} setQuery={setQuery} /> */}
          <ListFilter priceRange={priceRange} />
        </FilterContainer>
        <main>
          <List listData={listData} />
        </main>
      </ListContainer>
    </PageWrapper>
  );
};

export default TourTicketList;

const PageWrapper = styled.main`
  ${({ theme }) => theme.Wrapper}
`;

const PageHeader = styled.h1`
  padding: 30px 0;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.underTitleSize};
  font-weight: 500;
  letter-spacing: -1px;
`;

const ListContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const FilterContainer = styled.aside`
  width: 250px;
`;
