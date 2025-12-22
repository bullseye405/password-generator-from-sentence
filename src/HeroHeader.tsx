// HeroHeader.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroHeader = () => {
  return (
    <Box textAlign={'center'}>
      <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
        Turn Any Sentence Into a Strong Password
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        No more forgetting. Type a sentence and get a secure password instantly.
      </Typography>
    </Box>
  );
};

export default HeroHeader;
