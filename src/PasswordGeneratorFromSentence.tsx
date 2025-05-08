import { ContentCopy } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Divider,
  IconButton,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import GeneratedPassword from './GeneratedPassword';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import { handlePasswordGenerate } from './utils';

const PasswordGeneratorFromSentence = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [input, setInput] = useState('My dog barks at 4am every Monday!');
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
    <Box px={2} width="100%">
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
          Create a Secure Password from a Sentence
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
          sx={{ mb: 2 }}
        >
          Type something memorable. We’ll turn it into a strong password that’s
          easy to remember but hard to crack.
        </Typography>

        <TextField
          fullWidth
          placeholder="e.g. I drink 3 cups of coffee every morning!"
          value={input}
          variant="outlined"
          onChange={handleInputChange}
          margin="normal"
          InputProps={{
            endAdornment: input && (
              <Box display="flex" alignItems="center">
                <IconButton onClick={clearAll} size="small">
                  <CloseIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={() => navigator.clipboard.writeText(input)}
                  size="small"
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Box>
            ),
          }}
        />

        <Divider sx={{ my: 3 }} />

        {generated && (
          <>
            <Typography variant="subtitle2" gutterBottom>
              Generated Password
            </Typography>
            <GeneratedPassword content={generated} />
            <Box mt={2}>
              <PasswordStrengthChecker password={generated} />
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default PasswordGeneratorFromSentence;
