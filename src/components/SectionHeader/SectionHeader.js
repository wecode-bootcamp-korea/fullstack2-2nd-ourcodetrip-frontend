import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SectionHeader = ({ title, subTitle, linkDesc, subLink }) => {
  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>{title}</Title>
          {subTitle && <SubTitle>{subTitle}</SubTitle>}
        </TitleContainer>
        {subLink && (
          <SubLink>
            <Link to={subLink}>{linkDesc}</Link>
          </SubLink>
        )}
      </Wrapper>
    </Container>
  );
};

export default SectionHeader;

const Container = styled.article`
  ${({ theme }) => theme.Wrapper};
  margin-bottom: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const TitleContainer = styled.div``;

const Title = styled.h2`
  ${({ theme }) => theme.EventTitle};
`;

const SubTitle = styled.p`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.gray_1};
  font-weight: 500;
`;

const SubLink = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
`;
