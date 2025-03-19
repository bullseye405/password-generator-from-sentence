import { ContentCopy } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import PasswordStrengthChecker from './PasswordStrengthChecker';
import { handlePasswordGenerate } from './utils';

import './styles.css';

export default function App() {
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
    <Container>
      <Box my={2}>
        <Box my={2}>
          <TextField
            id="outlined-basic"
            label="Type your sentence"
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
                  bgcolor={'#f5f5f5'}
                >
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(input);
                    }}
                  >
                    <ContentCopy />
                  </Button>
                  <Button onClick={clearAll} variant="text">
                    <CloseIcon />
                  </Button>
                </Box>
              ),
            }}
          />
        </Box>

        <Box my={2}>
          {!generated ? (
            <Typography variant="subtitle1">
              Type a sentence that you will never forget! Password based on your
              sentence will be generated here.
            </Typography>
          ) : (
            <>
              <Box
                borderRadius={1}
                p={1}
                mr={1}
                mt={1}
                flex={1}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems="center"
                bgcolor={'#f5f5f5'}
              >
                <Typography
                  variant="subtitle1"
                  alignContent={'center'}
                  style={{ wordBreak: 'break-word' }}
                >
                  {generated}
                </Typography>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(generated);
                  }}
                >
                  <ContentCopy />
                </Button>
              </Box>

              <PasswordStrengthChecker password={generated} />
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
}
