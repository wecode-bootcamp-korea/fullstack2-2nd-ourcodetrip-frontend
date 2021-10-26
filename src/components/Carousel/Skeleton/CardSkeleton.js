import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const CardSkeleton = () => {
  return (
    <Box>
      <Skeleton variant="rectangular" style={{ width: 250, height: 167 }} />
      <Box style={{ paddingTop: 10, height: 145 }}>
        <Skeleton variant="h1" style={{ marginBottom: 10 }} />
        <Skeleton variant="h1" style={{ marginBottom: 10 }} />
        <Skeleton variant="p" style={{ width: 120, marginBottom: 10 }} />
        <Skeleton variant="p" style={{ width: 120, marginBottom: 10 }} />
      </Box>
    </Box>
  );
};

export default CardSkeleton;
