import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import GeneratedPassword from './GeneratedPassword';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import { generateRandomPassword, initialCheckBoxState } from './utils';

const MIN_LENGTH = 16;

const RandomPasswordGenerator = () => {
  const [generated, setGenerated] = useState('');
  const [checkBoxState, setCheckBoxState] = useState(initialCheckBoxState);
  const [length, setLength] = useState(16);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const password = generateRandomPassword(length, checkBoxState);
    setGenerated(password);
  }, []);

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
    // setGenerated('');
    setCheckBoxState(initialCheckBoxState);
    setLength(MIN_LENGTH);
  };

  const disabledGenerateButton = !Object.values(checkBoxState).some(Boolean);

  return (
    <>
      <Box sx={{ textAlign: 'center', mt: 6, mb: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Prefer full control?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Use the random password generator below to customize your password
          settings.
        </Typography>
      </Box>

      <Box width={isMobile ? 'auto' : '100%'} py={2} px={isMobile ? 2 : 0}>
        <Paper
          elevation={5}
          sx={{
            p: { xs: 2, sm: 4 },
            maxWidth: 600,
            borderRadius: 3,
            mx: 'auto',
            backgroundColor: theme.palette.grey[50],
          }}
        >
          {/* <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
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
          </Box> */}

          {/* <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            sx={{ mb: 2 }}
          >
            Customize your password strength and character types. Great when you
            want more control.
          </Typography> */}
          <Box
            display={'flex'}
            justifyContent="space-between"
            mb={2}
            alignItems={'center'}
          >
            <Button
              variant="text"
              onClick={handleGenerateClick}
              disabled={disabledGenerateButton}
            >
              Generate Password
            </Button>

            <Button onClick={handleReset}>Reset</Button>
          </Box>

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

          {/* <Button
            variant="text"
            onClick={handleGenerateClick}
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            disabled={disabledGenerateButton}
          >
            Generate Password
          </Button> */}
        </Paper>
      </Box>
    </>
  );
};

export default RandomPasswordGenerator;
