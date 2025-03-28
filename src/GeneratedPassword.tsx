import { ContentCopy } from '@mui/icons-material';
import { Box, IconButton, TextField } from '@mui/material';
import React from 'react';

const GeneratedPassword = ({
  content,
  handleInputChange,
}: {
  content: string;
  handleInputChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}) => {
  return (
    <TextField
      value={content}
      placeholder="Password based on your sentence will be generated here."
      disabled={!handleInputChange}
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
