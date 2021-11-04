import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ApiCall } from '../../../utils/ApiCall';
import { AiFillHeart } from 'react-icons/ai';

const EmptyList = () => {
  const [cityCard, setCityCard] = useState([]);

  useEffect(() => {
    ApiCall('data/cities.json', 'GET').then(data =>
      setCityCard(data.splice(0, 6))
    );
  }, []);

  return (
    <Container>
      <TextContainer>
        <AiFillHeart
          style={{ marginBottom: '24px', fontSize: '32px', color: '#CED4DA' }}
        />
        <Header>위시리스트가 비었습니다</Header>
        <Text>어디로 떠날지 고민 중이신가요?</Text>
      </TextContainer>
      <Suggestion>
        {cityCard.map(ele => (
          <SuggestionCard>
            <Link to="/cities">
              <ImageBox>
                <Image src={ele.imgCardBg} alt={ele.region} />
              </ImageBox>
              <CityNameBox>
                <CityName>{ele.region}</CityName>
              </CityNameBox>
            </Link>
          </SuggestionCard>
        ))}
      </Suggestion>
    </Container>
  );
};

export default EmptyList;

const Container = styled.article`
  ${({ theme }) => theme.Wrapper}
  padding: 48px 0 100px;
`;

const TextContainer = styled.div`
  padding: 94px 0 48px;
  text-align: center;
`;

const Header = styled.h2`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -1px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: 17px;
`;

const Suggestion = styled.section`
  display: flex;
  gap: 20px;
`;

const SuggestionCard = styled.dl`
  position: relative;
`;

const ImageBox = styled.dt``;

const Image = styled.img``;

const CityNameBox = styled.dd`
  position: absolute;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
`;

const CityName = styled.h3`
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-shadow: 0 0 4px rgb(0 0 0 / 50%);
`;
