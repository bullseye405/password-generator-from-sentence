import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';

const steps = [
  {
    step: 1,
    title: 'Think of a Sentence',
    description: 'Use something memorable to you',
  },
  {
    step: 2,
    title: 'Type It In',
    description: 'Enter your sentence in the field above',
  },
  {
    step: 3,
    title: 'Watch the Magic',
    description: 'See your strong password appear instantly',
  },
  {
    step: 4,
    title: 'Copy & Use',
    description: 'Copy your password and use it anywhere',
  },
];

const HowItWorks = () => {
  return (
    <Box textAlign="center" py={4} mb={6}>
      {/* Section Title */}
      <Typography variant="h4" fontWeight={700} mb={6} color="text.primary">
        How It Works
      </Typography>

      {/* Steps */}
      <Grid container spacing={3} justifyContent="center">
        {steps.map((item) => (
          <Grid key={item.step}>
            <Stack spacing={2} alignItems="center" justifyContent={'center'}>
              {/* Step Number */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                }}
              >
                {item.step}
              </Box>

              <Typography
                variant="subtitle1"
                fontWeight={600}
                color="text.primary"
              >
                {item.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" maxWidth={220}>
                {item.description}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body2" color="text.secondary" mt={6}>
        Your privacy is our priority. All password generation happens locally in
        your browser.
      </Typography>
    </Box>
  );
};

export default HowItWorks;
