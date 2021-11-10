import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SideProfileSection from './ProfileSection/SideProfileSection';
import ManagingProfileMainSection from './ProfileSection/ManagingProfileMainSection';

const ManagingProfile = () => {
  const [userData, setUserData] = useState([]);
  const [isKakaoLinked, setIsKakaoLinked] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8001/users/profile/', {
      method: 'GET',
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        const { data } = res;
        setIsKakaoLinked(data.platform === 'kakao');
        setUserData(data);
      });
  }, []);

  return (
    <ProfileWrapper>
      <Header>
        <h1>프로필 관리</h1>
      </Header>
      <Main>
        <SideProfileSection userData={userData} />
        <ManagingProfileMainSection
          userData={userData}
          isKakaoLinked={isKakaoLinked}
          setIsKakaoLinked={setIsKakaoLinked}
        />
      </Main>
    </ProfileWrapper>
  );
};

export default ManagingProfile;

const ProfileWrapper = styled.div`
  ${({ theme }) => theme.Wrapper}
  margin-top: 60px;
`;

const Header = styled.header`
  h1 {
    font-size: 24px;
    font-weight: 500;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
