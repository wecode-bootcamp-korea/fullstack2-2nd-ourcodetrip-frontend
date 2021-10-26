import React from 'react';
import styled from 'styled-components';
import LowerNav from './components/LowerNav';
import UpperNav from './components/UpperNav';
import NavBackground from './components/NavBackground';

const TopNav = () => {
  return (
    <>
      <StyledTopNav>
        <UpperNav />
        <LowerNav />
      </StyledTopNav>
      <NavBackground />
    </>
  );
};

export default TopNav;

const StyledTopNav = styled.nav`
  position: relative;
  border-bottom: 1px solid #dee2e6;
  z-index: 1;
`;
