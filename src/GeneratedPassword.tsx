import { ContentCopy, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import { calculatePasswordStrength, getProgressColor } from './utils';

const GeneratedPassword = ({
  content,
  handleInputChange,
}: {
  content: string;
  handleInputChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const strength = calculatePasswordStrength(content);
  const progressColor = getProgressColor(strength);

  const editable = handleInputChange !== undefined;

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      sx={
        !editable
          ? {
              borderColor: progressColor,
              borderWidth: 2,
              borderStyle: 'solid',
              borderRadius: 2,
            }
          : {}
      }
      variant="outlined"
      value={content}
      placeholder="Password will be generated here."
      disabled={!editable}
      onChange={handleInputChange}
      fullWidth
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <Box display={'flex'} alignItems="center">
            <IconButton onClick={togglePasswordVisibility} size="small">
              {showPassword ? (
                <Visibility fontSize="small" />
              ) : (
                <VisibilityOff fontSize="small" />
              )}
            </IconButton>
            <IconButton
              disabled={!content}
              onClick={() => {
                navigator.clipboard.writeText(content);
              }}
            >
              <ContentCopy fontSize="small" />
            </IconButton>
          </Box>
        ),
      }}
    />
  );
};

export default GeneratedPassword;
