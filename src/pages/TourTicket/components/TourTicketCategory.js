import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Collapse from '../../../components/List/Collapse';
import { ApiCall } from '../../../utils/ApiCall';
import { categoryQuery } from '../../../utils/categoryLinks';
import tourTicketHook from '../../../hooks/tourTicketHook';

const TourTicketCategory = ({ setCategories }) => {
  const { setTourTicketSorting } = tourTicketHook();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await ApiCall(
        'http://localhost:3000/data/tourTicketCategories.json',
        'GET'
      );
      const categoryList = result.mainCategory;
      categoryList.forEach((category, categoryIdx) => {
        category.query = categoryQuery[categoryIdx].query;
        category.subCategory.forEach((eachSubCategory, subCategoryIdx) => {
          eachSubCategory.query =
            categoryQuery[categoryIdx].subCategory[subCategoryIdx].query;
        });
        category.subCategory.unshift({
          id: 0,
          name: '전체보기',
          query: categoryQuery[categoryIdx].query,
        });
      });
      categoryList.unshift({
        id: 0,
        name: '전체보기',
        query: '',
      });
      setCategory(categoryList);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <StyledTourTicketCategory>
      <Title>카테고리</Title>
      {loading ? (
        <div>loading</div>
      ) : (
        <CollapseWrapper>
          {category.map(data => {
            return (
              <Collapse
                id={data.id}
                key={data.id}
                title={data.name}
                collapseWidth={'250px'}
                icon={data.id}
                setCategories={setCategories}
              >
                {data.subCategory && (
                  <ul>
                    {data.subCategory.map(el => {
                      return (
                        <CollapseContents
                          key={el.id}
                          onClick={() => {
                            setTourTicketSorting({
                              criteria: 'categories',
                              value: el.query,
                            });
                          }}
                        >
                          {el.name}
                        </CollapseContents>
                      );
                    })}
                  </ul>
                )}
              </Collapse>
            );
          })}
        </CollapseWrapper>
      )}
    </StyledTourTicketCategory>
  );
};

export default TourTicketCategory;

const StyledTourTicketCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  color: #343a40;
  font-size: 18px;
  font-weight: 500;
`;

const CollapseWrapper = styled.div`
  border: 1px solid #dee2e6;
  padding: 8px 0;
`;

const CollapseContents = styled.li`
  height: 40px;
  font-size: 14px;
  line-height: 20px;
  padding: 10px;
  /* color: tomato; */
  &:hover {
    background-color: #f1f3f5;
  }
`;
