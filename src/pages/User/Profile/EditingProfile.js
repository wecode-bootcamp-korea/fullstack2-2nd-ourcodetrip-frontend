import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SideProfileSection from './ProfileSection/SideProfileSection';
import EditingProfileMainSection from './ProfileSection/EditingProfileMainSection';
import { API_ENDPOINT } from '../../../api';

const EditingProfile = () => {
  const [userData, setUserData] = useState([]);
  const [checkedEmail, setCheckedEmail] = useState('');
  const [checkedSms, setCheckedSms] = useState('');
  const [isKakaoLinked, setIsKakaoLinked] = useState(false);

  const handleSmsChecked = () => {
    setCheckedSms(!checkedSms);
  };

  const handleEmailChecked = () => {
    setCheckedEmail(!checkedEmail);
  };

  useEffect(() => {
    fetch(`${API_ENDPOINT}/users/profile/`, {
      method: 'GET',
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        const { data } = res;
        setUserData(data);
        setCheckedEmail(data.isEmailAgreed);
        setCheckedSms(data.isSmsAgreed);
        setIsKakaoLinked(data.platform === 'kakao');
      });
  }, []);

  return (
    <ProfileWrapper>
      <Header>
        <h1>프로필 편집</h1>
      </Header>
      <Main>
        <SideProfileSection userData={userData} />
        <EditingProfileMainSection
          userData={userData}
          checkedSms={checkedSms}
          checkedEmail={checkedEmail}
          handleSmsChecked={handleSmsChecked}
          handleEmailChecked={handleEmailChecked}
          isKakaoLinked={isKakaoLinked}
          setIsKakaoLinked={setIsKakaoLinked}
        />
      </Main>
    </ProfileWrapper>
  );
};

export default EditingProfile;

const ProfileWrapper = styled.div`
  ${({ theme }) => theme.Wrapper};
  margin-top: 60px;
`;

const Header = styled.header`
  h1 {
    font-size: 24px;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
