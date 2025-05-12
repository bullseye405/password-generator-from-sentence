import { ContentCopy } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import React from 'react';
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
  const strength = calculatePasswordStrength(content);
  const progressColor = getProgressColor(strength);

  const editable = handleInputChange !== undefined;

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
      InputProps={{
        endAdornment: (
          <IconButton
            disabled={!content}
            onClick={() => {
              navigator.clipboard.writeText(content);
            }}
          >
            <ContentCopy fontSize="small" />
          </IconButton>
        ),
      }}
    />
  );
};

export default GeneratedPassword;
