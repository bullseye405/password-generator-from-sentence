import {
  Box,
  Container,
  Divider,
  useMediaQuery
} from '@mui/material';
import React from 'react';

import PasswordGeneratorFromSentence from './PasswordGeneratorFromSentence';
import RandomPasswordGenerator from './RandomPasswordGenerator';
import './styles.css';

export default function App() {
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen width is less than 600px

  return (
    <Container
      sx={{
        height: '100vh',
        overflow: 'auto',
        padding: 3,
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <Box
        display={'flex'}
        gap={3}
        height={'100%'}
        flexDirection={isMobile ? 'column' : 'row'}
      >
        <PasswordGeneratorFromSentence />
        <Divider orientation={isMobile ? 'horizontal' : 'vertical'} flexItem />
        <RandomPasswordGenerator />
      </Box>
    </Container>
  );
}
