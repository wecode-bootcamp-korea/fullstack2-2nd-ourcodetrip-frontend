import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cards from '../Carousel/Cards';
import { listCards } from '../Carousel/defaultOptions';
import { displayRatingToStars } from '../../utils/displayRatingToStars';
import { useTourTicket } from '../../hooks/tourTicketHook';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const List = ({ listData = [] }) => {
  const [data, setData] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentSort, setCurrentSort] = useState([3, 'new##:desc']);

  const { setTourTicketSorting } = useTourTicket();

  const sortingCriteria = {
    priceAsc: { text: '낮은 가격순', query: 'price:asc' },
    priceDesc: { text: '높은 가격순', query: 'price:desc' },
    ratingDesc: { text: '평점 높은 순', query: 'rating:desc' },
    newDesc: { text: '신상품순', query: 'date:desc' },
  };

  const currentSorting = (idx, query) => {
    setCurrentSort([idx, query]);
    setTourTicketSorting({ criteria: 'sort', value: query });
  };

  useEffect(() => {
    setData(listData);
    setCurrentPageData([...listData].splice(0, 21));
    setPageCount(Math.ceil(listData.length / 24));
  }, [listData]);

  const handlePagenation = (e, i) => {
    setCurrentPageData([...data].splice((i - 1) * 21, 20 * i + 1));
    window.scrollTo({ top: 0 });
  };

  return (
    <ListContainer>
      <ListHeader>
        <Header>{data.length}개의 투어</Header>
        <SortContainer>
          {Object.values(sortingCriteria).map((txt, idx) => (
            <SortList key={idx}>
              <SortButton
                key={idx}
                id={txt.text}
                currentSort={currentSort[0] === idx}
                onClick={currentSorting.bind(this, idx, txt.query)}
              >
                {txt.text}
              </SortButton>
            </SortList>
          ))}
        </SortContainer>
      </ListHeader>
      <ListContent>
        {currentPageData.map((ele, idx) => {
          return (
            <Cards
              key={idx}
              currentSlide={0}
              options={listCards}
              displayRatingToStars={displayRatingToStars}
              {...ele}
            />
          );
        })}
      </ListContent>
      <Pagenation>
        <Stack spacing={2}>
          <Pagination
            onChange={handlePagenation}
            defaultPage={1}
            count={pageCount}
            color="primary"
            sx={{
              '& button': {
                margin: 0,
                height: '40px',
                width: '40px',
                color: '#51abf3',
                fontSize: '14px',
                borderRadius: '100px',
              },
              '& button.Mui-selected': {
                backgroundColor: '#51abf3',
                color: '#fff',
              },
              '& button.Mui-selected:hover': { backgroundColor: '#51abf3' },
              '& button:hover': {
                border: '2px solid #51abf3',
                background: 'none',
              },
              '.MuiPaginationItem-previousNext:hover': { border: 'none' },
            }}
          />
        </Stack>
      </Pagenation>
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.article`
  ${({ theme }) => theme.Wrapper};
  margin-bottom: 25px;
  width: 790px;
`;

const ListHeader = styled.section`
  display: flex;
  margin-bottom: 24px;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.h3`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.lmg};
  font-weight: 500;
`;

const SortContainer = styled.ul`
  display: flex;
`;

const SortList = styled.li``;

const SortButton = styled.button`
  ${({ theme }) => theme.buttons.resetButton};
  position: relative;
  margin-left: 30px;
  color: ${({ theme, currentSort }) =>
    currentSort ? theme.colors.black : theme.colors.gray_1};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 400;
  letter-spacing: -0.5px;

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: -12px;
    height: 5px;
    width: 5px;
    background-color: ${({ theme, currentSort }) =>
      currentSort ? theme.colors.black : theme.colors.gray_1};
    border-radius: 100px;
    cursor: default;
  }
`;

const ListContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 32px;
`;

const Pagenation = styled.div`
  display: flex;
  justify-content: center;
`;
