import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../../../hooks/userHook';

const UserDropdown = () => {
  const { logout, userInfo } = useUser();
  return (
    <UserInfoSelector>
      <Triangle></Triangle>
      <UserProfile>
        <Link to="/">
          <UserPhoto />
        </Link>
        <div>
          <UserId>{userInfo.name}</UserId>
          <ManageProfile to="/profile">프로필 관리</ManageProfile>
        </div>
      </UserProfile>
      <UserMenu>
        <Link to="/">
          <MenuList>파트너 등록하기</MenuList>
        </Link>
        <MenuList onClick={logout}>로그아웃</MenuList>
      </UserMenu>
    </UserInfoSelector>
  );
};

export default UserDropdown;

const UserPhoto = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/images/defaultUserIcon.png`,
  alt: 'user profile',
})`
  width: 39px;
  height: 39px;
  margin: 10px 15px 10px 10px;
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
  }
`;

const Triangle = styled.span`
  position: absolute;
  top: -17px;
  left: 168px;
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
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #ddd;
`;

const UserId = styled.p`
  height: 23px;
  font-size: 17px;
  font-weight: 500;
`;

const ManageProfile = styled(Link)`
  color: #4da7ef;
  &:hover {
    color: #aaa;
  }
`;

const UserMenu = styled.ul`
  padding-top: 10px;
`;

const MenuList = styled.li`
  height: 39px;
  line-height: 39px;
  cursor: pointer;
  padding: 0 10px;
  &:hover {
    background-color: #eee;
  }
`;
