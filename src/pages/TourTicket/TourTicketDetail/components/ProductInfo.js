import React, { useState } from 'react';
import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';

const ProductInfo = ({ productImage, productRef }) => {
  const [openImage, setOpenImage] = useState(true);
  return (
    <>
      <InfoContainer open={openImage} ref={productRef}>
        {productImage &&
          productImage.map(product => {
            return <img src={product.imageUrl} alt="상세정보" />;
          })}
      </InfoContainer>
      <CropBottom open={openImage}>
        <MoreButton onClick={() => setOpenImage(!openImage)}>
          상품 설명 더 보기
          <MdExpandMore />
        </MoreButton>
      </CropBottom>
    </>
  );
};

export default React.forwardRef((props, ref) => {
  return <ProductInfo {...props} productRef={ref} />;
});

const InfoContainer = styled.section`
  padding-bottom: 30px;
  border-bottom: 1px solid #e8ecef;
  max-height: ${({ open }) => (open ? '700px' : 'none')};
  overflow: hidden;
`;

const CropBottom = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  padding-top: 16px;
`;

const MoreButton = styled.button`
  display: flex;
  margin: 0 auto;
  padding: 10px 32px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  color: #495056;
  background-color: white;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    box-shadow: 3px 3px 5px 0 #e7eaed;
  }
`;
