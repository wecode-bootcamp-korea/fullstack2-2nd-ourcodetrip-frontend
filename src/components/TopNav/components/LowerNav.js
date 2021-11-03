import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import navListData from '../navListData.json';

const LowerNav = () => {
  const { pathname } = useLocation();
  const { business, promotions } = navListData;
  const changingColor = navListData?.initialNavColor[pathname];

  return (
    <Lower color={changingColor}>
      {business.map(el => {
        return (
          <LowerNavLink color={changingColor} to={el.link} key={el.title}>
            {pathname === '/' && <NavIcon icon={el.icon} />}
            <ServiceTitle>{el.title}</ServiceTitle>
          </LowerNavLink>
        );
      })}
      {changingColor && <Separator>|</Separator>}
      {promotions.map(promotion => {
        return (
          <LowerNavLink
            color={changingColor}
            to={promotion.link}
            key={promotion.title}
          >
            <ServiceTitle>{promotion.title}</ServiceTitle>
          </LowerNavLink>
        );
      })}
    </Lower>
  );
};

export default LowerNav;

const Lower = styled.div`
  display: flex;
  align-items: center;
  width: 1060px;
  margin: 0 auto;
  color: ${props => (props.color ? '#fff' : '#495056')};
`;

const LowerNavLink = styled(Link)`
  display: flex;
  margin: 0 20px 0 0;
  border-bottom: 3px solid transparent;
  font-weight: 500;
  font-size: 17px;
  transition: ease-out 0.05s;
  &:first-child {
    margin-left: -5px;
  }
  &:hover {
    border-bottom: 3px solid ${props => (props.color ? '#fff' : '#79bef5')};
  }
`;

const ServiceTitle = styled.span`
  height: 50px;
  line-height: 50px;
`;

const Separator = styled.span`
  padding: 10px 20px;
  color: #e9ecef;
`;
const NavIcon = styled.img.attrs(props => ({
  src: `${process.env.PUBLIC_URL}/images/nav-${props.icon}.png`,
}))`
  position: relative;
  top: 11px;
  width: auto;
  height: 25px;
  padding-right: 3px;
`;
