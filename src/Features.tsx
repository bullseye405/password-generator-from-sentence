import React from 'react';
import { Box, Grid, Card, Typography, Stack } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import BoltIcon from '@mui/icons-material/Bolt';
import LockIcon from '@mui/icons-material/Lock';

const features = [
  {
    title: 'Secure by Design',
    description:
      'Our algorithm creates passwords that meet all security standards while remaining memorable.',
    icon: <ShieldIcon fontSize="large" />,
    color: 'primary',
  },
  {
    title: 'Lightning Fast',
    description:
      'Generate strong passwords instantly as you type. No waiting, no delays.',
    icon: <BoltIcon fontSize="large" />,
    color: 'success',
  },
  {
    title: 'Privacy Protected',
    description:
      'Everything happens in your browser. Your sentences and passwords never leave your device.',
    icon: <LockIcon fontSize="large" />,
    color: 'secondary',
  },
];

const FeaturesSection = () => {
  return (
    <Box display={'flex'} py={4}>
      {features.map((feature, key) => (
        <Card
          key={key}
          sx={{
            textAlign: 'center',
            p: 3,
            height: '100%',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
            border: '0px dotted red',
            boxShadow: 'none',
          }}
        >
          <Stack spacing={2} alignItems="center">
            {/* Icon Circle */}
            <Box
              sx={{
                width: 64,
                height: 64,
                // borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: (theme: any) => theme.palette[feature.color].main,
              }}
            >
              {feature.icon}
            </Box>

            <Typography variant="h6" fontWeight={600}>
              {feature.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {feature.description}
            </Typography>
          </Stack>
        </Card>
      ))}
    </Box>
  );
};

export default FeaturesSection;
