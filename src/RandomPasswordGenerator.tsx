import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import GeneratedPassword from './GeneratedPassword';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import { generateRandomPassword, initialCheckBoxState } from './utils';

const RandomPasswordGenerator = () => {
  const [generated, setGenerated] = useState('');
  const [checkBoxState, setCheckBoxState] = useState(initialCheckBoxState);
  const [length, setLength] = useState(12);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleGenerateClick = () => {
    const password = generateRandomPassword(length, checkBoxState);
    setGenerated(password);
  };

  const handleInputChange = (e: { target: { value: string } }) => {
    setGenerated(e.target.value);
    setLength(e.target.value.length);
  };

  return (
    <Box p={2} width="100%">
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 4 },
          width: '100%',
          maxWidth: 600,
          borderRadius: 3,
          mx: 'auto',
          backgroundColor: theme.palette.grey[50],
        }}
      >
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          fontWeight={600}
          gutterBottom
        >
          Random Password Generator
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
          sx={{ mb: 2 }}
        >
          Customize your password strength and character types. Great when you
          want more control.
        </Typography>

        <GeneratedPassword
          content={generated}
          handleInputChange={handleInputChange}
        />

        <Divider sx={{ my: 3 }} />

        <PasswordStrengthChecker
          password={generated}
          checkBoxState={checkBoxState}
          setCheckBoxState={setCheckBoxState}
          length={length}
          setLength={setLength}
        />

        <Button
          variant="text"
          onClick={handleGenerateClick}
          fullWidth
          size="large"
          sx={{ mt: 3 }}
        >
          Generate Password
        </Button>
      </Paper>
    </Box>
  );
};

export default RandomPasswordGenerator;
