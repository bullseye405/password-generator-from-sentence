import { Box, Container, Divider } from '@mui/material';
import React from 'react';

import PasswordGeneratorFromSentence from './PasswordGeneratorFromSentence';

import './styles.css';
import RandomPasswordGenerator from './RandomPasswordGenerator';

export default function App() {
  return (
    <Container
      sx={{
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Box display={'flex'} gap={3} height={'100%'}>
        <PasswordGeneratorFromSentence />
        <Divider orientation="vertical" flexItem />
        <RandomPasswordGenerator />
      </Box>
    </Container>
  );
}
