import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import GeneratedPassword from './GeneratedPassword';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import { generateRandomPassword, initialCheckBoxState } from './utils';
import { RestartAlt } from '@mui/icons-material';

const MIN_LENGTH = 16;

const RandomPasswordGenerator = () => {
  const [generated, setGenerated] = useState('');
  const [checkBoxState, setCheckBoxState] = useState(initialCheckBoxState);
  const [length, setLength] = useState(16);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleGenerateClick = () => {
    const password = generateRandomPassword(length, checkBoxState);
    setGenerated(password);
  };

  const handleInputChange = (e: { target: { value: string } }) => {
    const noWhitespace = e.target.value.replace(/\s/g, '');
    setGenerated(noWhitespace);
    setLength(noWhitespace.length);
  };

  const handleReset = () => {
    setGenerated('');
    setCheckBoxState(initialCheckBoxState);
    setLength(MIN_LENGTH);
  };

  const disabledGenerateButton = !Object.values(checkBoxState).some(Boolean);

  return (
    <Box width={isMobile ? 'auto' : '100%'}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 4 },
          maxWidth: 600,
          borderRadius: 3,
          mx: 'auto',
          backgroundColor: theme.palette.grey[50],
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            fontWeight={600}
            gutterBottom
          >
            Random Password Generator
          </Typography>
          <IconButton
            aria-label="Reset"
            onClick={handleReset}
            size={isMobile ? 'small' : 'medium'}
            sx={{ ml: 1, mb: 1 }}
          >
            <RestartAlt />
          </IconButton>
        </Box>

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
          disabled={disabledGenerateButton}
        >
          Generate Password
        </Button>
      </Paper>
    </Box>
  );
};

export default RandomPasswordGenerator;
