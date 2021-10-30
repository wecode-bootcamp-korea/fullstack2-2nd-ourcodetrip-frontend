import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { login } from '../../../store/userSlice';

const UpperNav = () => {
  const [isUserInfoClicked, setIsUserInfoClicked] = useState(false);
  const state = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const changingColor = initialNavColor[pathname];

  return (
    <Upper>
      <UpperLeft>
        <Link to="/">
          <Logo color={changingColor} />
        </Link>
        <SearchBar color={changingColor} />
        <SearchingGlass color={changingColor} />
      </UpperLeft>
      <UpperRight color={changingColor}>
        {!state.isLogin ? (
          <>
            {unsignedNavInfo.map(el => {
              return (
                <li key={el.title}>
                  <UpperRightLink to={el.link}>{el.title}</UpperRightLink>
                </li>
              );
            })}
            <li>
              <SignUpButton
                color={changingColor}
                to="/"
                onClick={() => {
                  dispatch(login());
                }}
              >
                회원가입
              </SignUpButton>
            </li>
          </>
        ) : (
          <>
            {signedNavInfo.map(el => {
              return (
                <li key={el.title}>
                  <UpperRightLink page={pathname} to={el.link}>
                    {el.title}
                  </UpperRightLink>
                </li>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1060px;
  height: 72px;
  margin: 0px auto;
`;

const UpperLeft = styled.div`
  display: flex;
  align-items: center;
  a {
    padding: 12px 10px 10px 0;
  }
`;

const Logo = styled.img.attrs(props => ({
  src: props.color
    ? `${process.env.PUBLIC_URL}/images/logo.png`
    : `${process.env.PUBLIC_URL}/images/logo-white.png`,
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
    props.color ? '#f5f6f7' : 'rgba(245,246,247,.15)'};

  transition: ease-out 0.15s;

  &:focus {
    background-color: #fff;
  }
  &::placeholder {
    font-size: 15px;
    font-weight: 500;
    color: ${props => (props.color ? '#888' : '#ffffff')};
  }
`;

const SearchingGlass = styled(AiOutlineSearch)`
  position: relative;
  top: -1px;
  right: 284px;
  color: ${props => (props.color ? '#888' : '#ffffff')};
  font-size: 19px;
  &:focus {
    color: #888;
  }
`;

const UpperRight = styled.ul`
  display: flex;
  color: ${props => props.color || '#ffffff'};
  font-size: 15px;
  li {
    height: 39px;
    line-height: 39px;
  }
`;

const UpperRightLink = styled(Link)`
  padding: 10px;
  margin: 0 10px;
  transition: linear 0.05s;
  border-radius: 4px;
  &:hover {
    background-color: ${props => (props.color ? '#f5f6f7' : 'rgba(0,0,0,0.1)')};
  }
`;

const SignUpButton = styled(Link)`
  padding: 8px 30px;
  margin: 0 1px 0 3px;
  border: 1px solid ${props => (props.color ? '#a7b4f9' : '#ffffff')};
  border-radius: 3px;
  font-weight: 500;
  transition: linear 0.05s;
  &:hover {
    background-color: ${props => (props.color ? '#e7f4fd' : 'rgba(0,0,0,0.1)')};
    color: ${props => (props.color ? '#2b96ed' : '#ffffff')};
  }
  &:link {
    color: ${props => (props.color ? '#2b96ed' : '#ffffff')};
  }
  &:visited {
    color: ${props => (props.color ? '#2b96ed' : '#ffffff')};
  }
`;

const UserInfoButton = styled.li`
  position: relative;
  margin: 0 0 0 10px;
  transition: linear 0.05s;
  border-radius: 4px;
`;

const UserPhoto = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/images/logo.png`,
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
