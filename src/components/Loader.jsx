
import React from 'react';
import { CircularProgress } from '@mui/material';

const styles = {
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Высота здесь настраивается в зависимости от ваших требований
  },
};

function Loader() {
  return (
    <div style={styles.spinnerContainer}>
      <CircularProgress size={60} color="primary" />
    </div>
  );
}

export default Loader;