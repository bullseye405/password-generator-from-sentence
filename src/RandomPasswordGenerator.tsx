import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import GeneratedPassword from './GeneratedPassword';
import { generateRandomPassword, initialCheckBoxState } from './utils';

const RandomPasswordGenerator = () => {
  const [generated, setGenerated] = useState('');

  const [checkBoxState, setCheckBoxState] = useState(initialCheckBoxState);
  const [length, setLength] = useState(12);
  const handleGenerateClick = () => {
    const password = generateRandomPassword(length, checkBoxState);
    setGenerated(password);
  };

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setGenerated(e.target.value);
    setLength(e.target.value.length);
  };
  return (
    <Box flex={1}>
       <Typography variant="h5" gutterBottom>
        Random Password Generator
      </Typography>
      <GeneratedPassword
        content={generated}
        handleInputChange={handleInputChange}
      />
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
      >
        Generate
      </Button>
    </Box>
  );
};

export default RandomPasswordGenerator;
