import React from 'react';
import Box from '@mui/material/Box';
import CardSkeleton from './CardSkeleton';

const CarouselSkeleton = () => {
  return (
    <Box style={{ display: 'flex', gap: 20 }}>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </Box>
  );
};

export default CarouselSkeleton;
