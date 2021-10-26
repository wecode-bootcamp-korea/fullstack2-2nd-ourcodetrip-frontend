import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/userSlice';

const UserDropdown = () => {
  const dispatch = useDispatch();
  return (
    <UserInfoSelector>
      <span id="diamond"></span>
      <UserProfile>
        <Link to="/">
          <UserPhoto />
        </Link>
        <div>
          <p>유저 아이디</p>
          <Link to="/">프로필 관리</Link>
        </div>
      </UserProfile>
      <UserMenu>
        <Link to="/">
          <li>파트너 등록하기</li>
        </Link>
        <li
          onClick={() => {
            dispatch(logout());
          }}
        >
          로그아웃
        </li>
      </UserMenu>
    </UserInfoSelector>
  );
};

export default UserDropdown;

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

const UserInfoSelector = styled.div`
  &&& {
    position: absolute;
    color: #666d75;
    right: -30px;
    width: 230px;
    padding: 10px 0;
    border: 1px solid #ddd;
    background-color: #fff;
    #diamond {
      position: absolute;
      top: -17px;
      left: 170px;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-bottom-color: #ddd;
      &:after {
        content: '';
        position: absolute;
        left: -7px;
        top: -5px;
        width: 0;
        height: 0;
        border: 7px solid transparent;
        border-bottom-color: #fff;
      }
    }
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #ddd;
  img {
    margin: 10px 15px 10px 10px;
  }
  p {
    height: 23px;
    font-size: 17px;
    font-weight: 500;
  }
  a {
    color: #4da7ef;
    &:hover {
      color: #aaa;
    }
  }
`;

const UserMenu = styled.ul`
  padding-top: 10px;
  li {
    cursor: pointer;
    padding: 0 10px;
    &:hover {
      background-color: #eee;
    }
  }
`;
