import React, { useState, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useTourTicket } from '../../hooks/tourTicketHook';

const Collapse = ({ children, title, collapseWidth, icon, id }) => {
  const { setCategoryInit } = useTourTicket();
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const handleButtonClick = useCallback(() => {
    if (isOpen) {
      parentRef.current.style.height = '0';
    } else {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <StyledCollapse collapseWidth={collapseWidth}>
      <Header onClick={handleButtonClick} isOpen={isOpen} id={id}>
        {children ? (
          <>
            <CategoryIcon icon={icon} />
            <span>{title}</span>
            <NormalButton isOpen={isOpen}>{`>`}</NormalButton>
          </>
        ) : (
          <GoToEntire
            onClick={() => {
              setCategoryInit();
            }}
          >
            <CategoryIcon icon={icon} />
            <span>{title}</span>
          </GoToEntire>
        )}
      </Header>
      <ContentsWrapper ref={parentRef}>
        <Contents ref={childRef}>{children}</Contents>
      </ContentsWrapper>
    </StyledCollapse>
  );
};

export default Collapse;

const StyledCollapse = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: ${props => props.collapseWidth};
  border-radius: 4px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding-left: 10px;
  line-height: 45px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #e9ecef;
  }

  ${({ isOpen, id }) =>
    isOpen &&
    id !== 0 &&
    css`
      background-color: #e9ecef;
    `};
`;

const CategoryIcon = styled.img.attrs(props => ({
  src: `/images/mainCategory/${props.icon}.png`,
  alt: 'category',
}))`
  width: auto;
  height: 25px;
  margin-right: 5px;
`;

const NormalButton = styled.span`
  position: absolute;
  right: 10%;
  color: #adb5bd;
  font-weight: 800;
  transition: all 0.5s;
  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: rotate(-270deg);
        `
      : css`
          transform: rotate(-90deg);
        `};
`;

const GoToEntire = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ContentsWrapper = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: height 0.35s ease;
`;
const Contents = styled.div`
  cursor: pointer;
`;
