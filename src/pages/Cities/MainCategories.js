import React from 'react';
import styled from 'styled-components';

const MainCategories = ({ mainCategories }) => {
  return (
    <MainCategoryContainer>
      <Header>카테고리</Header>
      <ButtonContainer>
        {mainCategories.map((ele, idx) => (
          <Button key={idx}>
            <Icons categoryId={ele.categoryId} />
            {ele.name}
          </Button>
        ))}
      </ButtonContainer>
    </MainCategoryContainer>
  );
};

export default MainCategories;

const MainCategoryContainer = styled.section`
  ${({ theme }) => theme.Wrapper};
  padding: 40px 0;
  height: 300px;
  background-color: white;
`;

const Header = styled.h2`
  font-size: ${({ theme }) => theme.EventTitle};
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  ${({ theme }) => theme.flexCenterContainer}
  justify-content: left;
  padding: 12px;
  height: 52px;
  min-width: 259px;
  color: ${({ theme }) => theme.colors.darkGray};
  background: none;
  background-color: ${({ theme }) => theme.colors.gray_3};
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: ${({ theme }) => theme.borders.basicRadius};
  cursor: pointer;

  &:hover {
    background-color: #e9ecef;
  }
`;

const Icons = styled.span`
  display: block;
  margin-right: 10px;
  height: 28px;
  width: 28px;
  background-image: ${({ categoryId }) =>
    `url(/images/subCategories/${categoryId}.png)`};
  background-size: cover;
`;
