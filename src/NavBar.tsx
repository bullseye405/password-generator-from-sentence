import { Box, Typography } from '@mui/material';
import React from 'react';

const NavBar = () => {
  return (
    <Box textAlign="center" py={3}>
      <Typography variant="h2" fontWeight={700} letterSpacing={1}>
        PassForge
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Generate secure passwords effortlessly
      </Typography>
    </Box>
  );
};

export default NavBar;
