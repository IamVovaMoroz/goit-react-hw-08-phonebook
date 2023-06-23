import React from 'react';
import { CircularProgress } from '@mui/material';
import { SpinnerContainer } from './Loader.styled';

function Loader() {
  return (
    <SpinnerContainer>
      <CircularProgress size={60} color="primary" />
    </SpinnerContainer>
  );
}

export default Loader;