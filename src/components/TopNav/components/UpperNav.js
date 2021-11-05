import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';
import UserDropdown from './UserDropdown';
import {
  unsignedNavInfo,
  signedNavInfo,
  initialNavColor,
} from '../navListData.json';
import { useUser } from '../../../hooks/userHook';

const UpperNav = () => {
  const [isUserInfoClicked, setIsUserInfoClicked] = useState(false);
  const { isLogin } = useUser();
  const { pathname } = useLocation();
  const changingColor = initialNavColor[pathname];
  return (
    <Upper>
      <UpperLeft>
        <ToMainLink to="/">
          <Logo color={changingColor} />
        </ToMainLink>
        {pathname !== '/tourticket' && (
          <>
            <SearchBar color={changingColor} />
            <SearchingGlass color={changingColor} />
          </>
        )}
      </UpperLeft>
      {pathname === '/tourticket' && (
        <>
          <TourSearchingGlass />
          <TourSearchingBar />
        </>
      )}
      <UpperRight color={changingColor}>
        {!isLogin ? (
          <>
            {unsignedNavInfo.map(el => {
              return (
                <UserMenuList key={el.title}>
                  <UpperRightLink to={el.link}>{el.title}</UpperRightLink>
                </UserMenuList>
              );
            })}
            <UserMenuList>
              <SignUpButton color={changingColor} to="/signin">
                회원가입
              </SignUpButton>
            </UserMenuList>
          </>
        ) : (
          <>
            {signedNavInfo.map(el => {
              return (
                <UserMenuList key={el.title}>
                  <UpperRightLink page={pathname} to={el.link}>
                    {el.title}
                  </UpperRightLink>
                </UserMenuList>
              );
            })}
            <UserInfoButton>
              <UserPhoto
                onClick={() => {
                  setIsUserInfoClicked(!isUserInfoClicked);
                }}
              />
              {isUserInfoClicked && <UserDropdown />}
            </UserInfoButton>
          </>
        )}
      </UpperRight>
    </Upper>
  );
};

export default UpperNav;

const Upper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1060px;
  height: 72px;
  margin: 0px auto;
`;

const UpperLeft = styled.div`
  display: flex;
  align-items: center;
`;

const ToMainLink = styled(Link)`
  padding: 12px 10px 10px 0;
`;

const Logo = styled.img.attrs(props => ({
  src: props.color
    ? `${process.env.PUBLIC_URL}/images/logo-white.png`
    : `${process.env.PUBLIC_URL}/images/logo.png`,
}))`
  width: auto;
  height: 25px;
`;

const SearchBar = styled.input.attrs({
  type: 'text',
  placeholder: '도시나 상품을 검색해보세요',
  maxLength: '13',
})`
  width: 300px;
  height: 48px;
  margin-left: 20px;
  padding: 10px 40px 10px;
  border: 0;
  border-radius: 10px;
  background-color: ${props =>
    props.color ? 'rgba(245,246,247,.15)' : '#f5f6f7'};

  transition: ease-out 0.15s;

  &:focus {
    background-color: #fff;
  }
  &::placeholder {
    font-size: 15px;
    font-weight: 500;
    color: ${props => (props.color ? '#fff' : '#888')};
  }
`;

const SearchingGlass = styled(AiOutlineSearch)`
  position: relative;
  top: -1px;
  right: 284px;
  color: ${props => (props.color ? '#fff' : '#888')};
  font-size: 19px;
  &:focus {
    color: #888;
  }
`;

const UpperRight = styled.ul`
  display: flex;
  color: ${props => props.color || '#666d75'};
  font-size: 15px;
`;

const UserMenuList = styled.li`
  height: 39px;
  line-height: 39px;
`;

const UpperRightLink = styled(Link)`
  padding: 10px;
  margin: 0 10px;
  transition: linear 0.05s;
  border-radius: 4px;
  &:hover {
    background-color: ${props => (props.color ? 'rgba(0,0,0,0.1)' : '#f5f6f7')};
  }
`;

const SignUpButton = styled(Link)`
  padding: 8px 30px;
  margin: 0 1px 0 3px;
  border: 1px solid ${props => (props.color ? '#fff' : '#a7b4f9')};
  border-radius: 3px;
  font-weight: 500;
  transition: linear 0.05s;
  &:hover {
    background-color: ${props => (props.color ? 'rgba(0,0,0,0.1)' : '#e7f4fd')};
    color: ${props => (props.color ? '#fff' : '#2b96ed')};
  }
  &:link {
    color: ${props => (props.color ? '#fff' : '#2b96ed')};
  }
  &:visited {
    color: ${props => (props.color ? '#fff' : '#2b96ed')};
  }
`;

const UserInfoButton = styled.li`
  position: relative;
  margin: 0 0 0 10px;
  transition: linear 0.05s;
  border-radius: 4px;
`;

const UserPhoto = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/images/defaultUserIcon.png`,
  alt: 'user profile',
})`
  width: 39px;
  height: 39px;
  border: 2px solid #fff;
  border-radius: 18px;
  object-fit: contain;
  cursor: pointer;
  &:hover {
    border: 2px solid #bbb;
  }
`;

const TourSearchingBar = styled.input.attrs({
  type: 'text',
  placeholder: '도시나 상품을 검색해보세요',
  maxLength: '13',
})`
  position: absolute;
  left: 28.5%;
  top: 265%;
  width: 414px;
  height: 56px;
  margin-left: 20px;
  padding: 10px 40px 10px;
  border: 1px solid rgba(230, 230, 230, 0.8);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  transition: ease-out 0.15s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
  &:focus {
    background-color: #fff;
    &::placeholder {
      color: #fff;
    }
  }
  &::placeholder {
    margin: 0 auto;
    color: #efefef;
    font-size: 16.2px;
    text-align: center;
  }
`;

const TourSearchingGlass = styled(AiOutlineSearch)`
  position: absolute;
  top: 285.5%;
  left: 38%;
  color: #eaeaea;
  font-size: 30px;
  &:focus {
    color: #888;
  }
`;
