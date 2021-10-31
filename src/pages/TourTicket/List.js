import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import theme from '../../styles/theme';
import TourTicketCategory from './components/TourTicketCategory';
import tourTicketHook from '../../hooks/tourTicketHook';

const List = () => {
  const { sortingCriteria } = tourTicketHook();
  const [categories, setCategories] = useState('');
  const mount = useRef(false);
  const history = useHistory();
  useEffect(() => {
    if (!mount.current) {
      mount.current = true;
    } else {
      const query = Object.entries(sortingCriteria)
        .filter(e => e[1] !== '')
        .map(e => e.join('='))
        .join('&');
      history.push(`/tourticket/list?${query}`);
    }
  }, [sortingCriteria, history]);
  return (
    <StyledList>
      <TourTicketCategory
        categories={categories}
        setCategories={setCategories}
      />
    </StyledList>
  );
};

export default List;

const StyledList = styled.nav`
  ${props => props.theme.Wrapper}
`;
