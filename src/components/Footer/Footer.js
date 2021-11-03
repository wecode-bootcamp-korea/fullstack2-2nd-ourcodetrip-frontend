import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5';
import { SiNaver, SiInstagram, SiYoutube } from 'react-icons/si';

const Footer = () => {
  const footerListData = [
    { title: '소개', subCategory: ['회사소개', '채용', '공고'] },
    {
      title: '파트너',
      subCategory: [
        '파트너 등록하기',
        'Affiliate 프로그램',
        '리얼파트너',
        '파트너 블로그',
      ],
    },
    { title: '지원', subCategory: ['자주 묻는 질문', '최저가 보상제'] },
  ];
  return (
    <StyledFooter>
      <UpperFooter>
        <UpperLeft>
          <LeftTitle>고객센터 운영 안내</LeftTitle>
          <ul>
            <LeftList>
              <Bold>평일(채팅/유선) :</Bold> 09:00-18:00 (12시~13시 제외)
            </LeftList>
            <LeftList>
              <Bold>주말/공휴일 : </Bold>채팅 상담만 가능
            </LeftList>
            <LeftList>
              ※ <Bold>항공권 환불/변경 :</Bold> 09:00-17:00까지 접수 가능
            </LeftList>
            <LeftList>
              <Bold>유선상담 :</Bold> 1670-8208
            </LeftList>
          </ul>
          <ChatButton>1:1 채팅상담</ChatButton>
        </UpperLeft>
        <UpperRight>
          {footerListData.map((data, index, array) => {
            return (
              <LinkBlock count={100 / array.length} key={data.title}>
                <ListTitle>{data.title}</ListTitle>
                <ul>
                  {data.subCategory.map((category, index) => {
                    return (
                      <RightList key={category}>
                        <FooterListLink to="/">{category}</FooterListLink>
                      </RightList>
                    );
                  })}
                </ul>
              </LinkBlock>
            );
          })}
        </UpperRight>
      </UpperFooter>
      <LowerFooter>
        <LinksIconsBlock>
          <PrivacyBox>
            <p>
              <FooterListLink to="/">이용 약관</FooterListLink>
            </p>
            <Bold>
              <FooterListLink to="/">개인정보 처리방침</FooterListLink>
            </Bold>
            <p>
              <FooterListLink to="/">취소 및 환불 정책</FooterListLink>
            </p>
          </PrivacyBox>
          <IconBox>
            <ImFacebook2 />
            <SiNaver />
            <SiInstagram />
            <SiYoutube />|
            <IoLogoApple />
            <IoLogoGooglePlaystore />
          </IconBox>
        </LinksIconsBlock>
        <CompanyInfo>
          <a href="https://icons8.com/" target="_blank" rel="noreferrer">
            icons8
          </a>
          의 아이콘을 사용하고 있습니다.
        </CompanyInfo>
        <CompanyInfo>
          상호명 (주)아워코드트립 | 대표 아코트 | 개인정보보호책임자 아코트 |
          사업자등록번호 209- - - ---- 사업자정보확인 | 통신판매업신고번호 2019
          - ---- ----
        </CompanyInfo>
        <CompanyInfo>
          주소 서울특별시 강남구 테헤란로5길 7 (역삼동) 위워크 강남역 2호점 |
          이메일 help@ourcodetrip.com | 마케팅/제휴 문의
          marketing@ourcodetrip.com
        </CompanyInfo>
        <LastLine>
          자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있지 않습니다.
          아워코드트립은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
          상품·거래정보 및 거래에 대하여 책임을 지지않습니다.
        </LastLine>
      </LowerFooter>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  margin-top: 60px;
  border-top: 1px solid #e9ecef;
  color: #848c94;
`;

const UpperFooter = styled.div`
  ${({ theme }) => theme.Wrapper}
  display: flex;
  padding: 40px 0;
`;

const UpperLeft = styled.div`
  width: 50%;
`;

const LeftTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
`;

const LeftList = styled.li`
  font-size: 14px;
  font-weight: 300;
  line-height: 19px;
`;

const Bold = styled.b`
  color: #495056;
  font-weight: 400;
`;

const ChatButton = styled.button`
  padding: 12px 15px;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #495056;
  background-color: #fff;
  font-weight: 600;
  transition: ease-out 0.15s;
  &:hover {
    border: 1.2px solid #ccc;
    box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.15);
  }
`;

const UpperRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
const LinkBlock = styled.div`
  width: ${props => props.count}%;
`;

const ListTitle = styled.h4`
  margin-bottom: 23px;
  font-size: 15px;
  font-weight: 700;
`;

const RightList = styled.li`
  margin-bottom: 17px;
  font-size: 14px;
`;

const FooterListLink = styled(Link)`
  position: relative;
  left: -6px;
  padding: 6px;
  border-radius: 5px;
  transition: ease 0.2s;
  &:hover {
    color: #51abf3;
    background-color: #f5fbff;
  }
`;

const LowerFooter = styled.div`
  ${({ theme }) => theme.Wrapper}
  padding-top:30px;
  border-top: 1px solid #e9ecef;
`;

const LinksIconsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 35px;
`;

const PrivacyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 33%;
  font-size: 14px;
`;
const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 28%;
  color: #adb5bd;
  font-size: 20px;
  *:hover {
    color: #ced4da;
    cursor: pointer;
  }
`;

const CompanyInfo = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
`;

const LastLine = styled(CompanyInfo)`
  margin: 20px 0 60px 0;
`;
