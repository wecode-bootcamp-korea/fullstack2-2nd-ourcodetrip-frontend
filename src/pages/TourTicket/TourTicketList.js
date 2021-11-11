import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import tourTicketHook from '../../hooks/tourTicketHook';
import List from '../../components/List/List';
import ListFilter from '../../components/List/ListFilter';
import TourTicketCategory from './components/TourTicketCategory';
import { ApiCall } from '../../utils/ApiCall';

const TourTicketList = () => {
  const [listData, setListData] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [didInit, setDidInit] = useState(false);
  const [query, setQuery] = useState('');
  const { sortingCriteria } = tourTicketHook();

  const mount = useRef(false);
  const history = useHistory();
  useEffect(() => {
    if (!mount.current) {
      mount.current = true;
    } else {
      const query = Object.entries(sortingCriteria)
        .filter(value => value[1] !== '')
        .map(value => value.join('='))
        .join('&');
      history.push(`/tourticket/list?${query}`);
      setQuery(query);
    }
  }, [sortingCriteria, history]);

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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
          <ListFilter priceRange={priceRange} setQuery={setQuery} />
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
