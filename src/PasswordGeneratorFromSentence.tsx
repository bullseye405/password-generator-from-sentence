import { ContentCopy } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import PasswordStrengthChecker from './PasswordStrengthChecker';
import { handlePasswordGenerate } from './utils';
import GeneratedPassword from './GeneratedPassword';

const PasswordGeneratorFromSentence = () => {
  const [input, setInput] = useState('');
  const [generated, setGenerated] = useState('');

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInput(e.target.value);
  };

  const clearAll = () => {
    setInput('');
    setGenerated('');
  };

  useEffect(() => {
    const password = handlePasswordGenerate(input);
    setGenerated(password);
  }, [input]);

  return (
    <Box flex={1} py={1}>
      <Typography variant="h5" gutterBottom>
        Password Generator from Sentence
      </Typography>
      <GeneratedPassword content={generated} />

      <PasswordStrengthChecker password={generated} />

      <Box my={2}>
        <TextField
          id="outlined-basic"
          placeholder="Type a sentence that you will never forget"
          value={input}
          variant="outlined"
          onChange={handleInputChange}
          fullWidth
          InputProps={{
            endAdornment: input && (
              <Box
                borderRadius={1}
                flex={1}
                display={'flex'}
                justifyContent={'space-between'}
              >
                <IconButton
                  onClick={clearAll}
                  sx={{ padding: 0, paddingRight: 1 }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    navigator.clipboard.writeText(input);
                  }}
                  sx={{ padding: 0, paddingRight: 1 }}
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Box>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default PasswordGeneratorFromSentence;
