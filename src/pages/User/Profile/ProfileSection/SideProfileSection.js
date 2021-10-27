import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const SideProfileSection = props => {
  const { name } = props.userData;

  return (
    <>
      <div>
        <ProfileManagement>
          <img
            src="https://d2yoing0loi5gh.cloudfront.net/assets/default/user_profile_image-414acc60b27f0a258bec14c82b70dc361fc6768da9289f924f887bec1fc33849.png"
            alt="기본 사진"
          />
          <h1>{name}</h1>
          <div>
            <img
              src="https://d2yoing0loi5gh.cloudfront.net/assets/kitty/traveler/reservation/ic_setting@2x-832c08d9d38f208502f94e8d35e78a320024fc5f61630f2eba7801845e1eda78.png"
              alt="기본 사진"
            />
            <span> 프로필 관리 </span>
          </div>
        </ProfileManagement>
        <PointAndCoupon>
          <PointAndCouponHeader>
            <dd>내 포인트 </dd>
            <dd>내 쿠폰</dd>
          </PointAndCouponHeader>
          <PointAndCouponContent>
            <Link to="/profile">
              0원
              <img
                src="https://d2yoing0loi5gh.cloudfront.net/assets/kitty/setting/ic-arrow-right-xs@2x-b290f6804f2f002ced664adc4c5e63a59629269d2e6657184239261195f22147.png"
                alt="화살표"
              />
            </Link>
            <Link to="profile">
              0장
              <img
                src="https://d2yoing0loi5gh.cloudfront.net/assets/kitty/setting/ic-arrow-right-xs@2x-b290f6804f2f002ced664adc4c5e63a59629269d2e6657184239261195f22147.png"
                alt="화살표"
              />
            </Link>
          </PointAndCouponContent>
        </PointAndCoupon>
      </div>
    </>
  );
};

export default SideProfileSection;

const ProfileManagement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 10px;
  height: 250px;
  width: 250px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  img {
    height: 80px;
    width: 80px;
  }

  h1 {
    margin-top: 25px;
    font-size: 17px;
    font-weight: 500;
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 40px;

    img {
      margin-right: 7px;
      height: 13px;
      width: 13px;
    }
  }
`;

const PointAndCoupon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  padding: 25px 10px;
  height: 91px;
  width: 250px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 15px;

  img {
    height: 13px;
    width: 13px;
  }
`;

const PointAndCouponHeader = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 37px;
  font-size: 14px;
`;

const PointAndCouponContent = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
  font-weight: 700;
  color: #2b96ed;
`;
