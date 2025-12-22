import { Container } from '@mui/material';
import React from 'react';

import FeaturesSection from './Features';
import Footer from './Footer';
import HeroHeader from './HeroHeader';
import HowItWorks from './HowItWorks';
import NavBar from './NavBar';
import PasswordGeneratorFromSentence from './PasswordGeneratorFromSentence';
import RandomPasswordGenerator from './RandomPasswordGenerator';
import './styles.css';

export default function App() {
  return (
    <Container
      sx={{
        pb: 3,
      }}
    >
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

        <RandomPasswordGenerator />
      </Container>

      <FeaturesSection />

      <HowItWorks />

      <Footer />
    </Container>
  );
}
