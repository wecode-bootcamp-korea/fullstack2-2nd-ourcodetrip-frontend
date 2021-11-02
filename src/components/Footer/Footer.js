import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5';
import { SiNaver, SiInstagram, SiYoutube } from 'react-icons/si';

const Footer = () => {
  const footerListdata = [
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
          <h3>고객센터 운영 안내</h3>
          <ul>
            <li>
              <b>평일(채팅/유선) :</b> 09:00-18:00 (12시~13시 제외)
            </li>
            <li>
              <b>주말/공휴일 : </b>채팅 상담만 가능
            </li>
            <li>
              ※ <b>항공권 환불/변경 :</b> 09:00-17:00까지 접수 가능
            </li>
            <li>
              <b>유선상담 :</b> 1670-8208
            </li>
          </ul>
          <button>1:1 채팅상담</button>
        </UpperLeft>
        <UpperRight>
          {footerListdata.map((data, index, array) => {
            return (
              <LinkBlock key={index} count={100 / array.length}>
                <h4>{data.title}</h4>
                <ul>
                  {data.subCategory.map((category, index) => {
                    return (
                      <li key={index}>
                        <Link to="/">{category}</Link>
                      </li>
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
              <Link to="/">이용 약관</Link>
            </p>
            <b>
              <Link to="/">개인정보 처리방침</Link>
            </b>
            <p>
              <Link to="/">취소 및 환불 정책</Link>
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
  h3 {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 700;
  }
  ul {
    margin-bottom: 15px;
  }
  li {
    font-size: 14px;
    font-weight: 300;
    line-height: 19px;
  }
  b {
    color: #495056;
    font-weight: 400;
  }
  button {
    padding: 12px 15px;
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
  }
`;
const UpperRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
const LinkBlock = styled.div`
  width: ${props => props.count}%;

  h4 {
    margin-bottom: 23px;
    font-size: 15px;
    font-weight: 700;
  }
  li {
    margin-bottom: 17px;
    font-size: 14px;
    a {
      position: relative;
      left: -6px;
      padding: 6px;
      border-radius: 5px;
      transition: ease 0.2s;
      &:hover {
        color: #51abf3;
        background-color: #f5fbff;
      }
    }
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
  b {
    color: #495056;
  }
  a {
    position: relative;
    left: -6px;
    padding: 6px;
    border-radius: 5px;
    transition: ease 0.2s;
    &:hover {
      color: #51abf3;
      background-color: #f5fbff;
    }
  }
`;
const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 28%;
  color: #adb5bd;
  font-size: 20px;
  svg:hover {
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
