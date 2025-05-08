import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import HeroHeader from './HeroHeader';
import NavBar from './NavBar';
import PasswordGeneratorFromSentence from './PasswordGeneratorFromSentence';
import RandomPasswordGenerator from './RandomPasswordGenerator';
import './styles.css';

export default function App() {
  return (
    <>
      <NavBar />

      <HeroHeader />

      <Container
        sx={{
          overflow: 'auto',
          // py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // gap: 4,
        }}
      >
        <PasswordGeneratorFromSentence />

        <Box sx={{ textAlign: 'center', mt: 6, mb: 4 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Prefer full control?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Use the random password generator below to customize your password
            settings.
          </Typography>
        </Box>

        <RandomPasswordGenerator />
      </Container>
    </>
  );
}
