import { Container, Divider, useMediaQuery } from '@mui/material';
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
        py: 2,
        scrollBehavior: 'smooth',
        display: 'flex',
        gap: 3,
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      <PasswordGeneratorFromSentence />
      <Divider orientation={isMobile ? 'horizontal' : 'vertical'} flexItem />
      <RandomPasswordGenerator />
    </Container>
  );
}
