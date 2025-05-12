import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Checkbox,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slider,
  Typography,
} from '@mui/material';
import React from 'react';

import {
  calculatePasswordStrength,
  CheckBoxState,
  CheckBoxValue,
  getProgressColor,
  getStrengthLabel,
} from './utils';

interface PasswordStrengthCheckerProps {
  password: string;
  checkBoxState?: CheckBoxState;
  setCheckBoxState?: React.Dispatch<React.SetStateAction<CheckBoxState>>;
  length?: number;
  setLength?: React.Dispatch<React.SetStateAction<number>>;
}

const PasswordStrengthChecker: React.FC<PasswordStrengthCheckerProps> = ({
  password,
  checkBoxState,
  setCheckBoxState,
  length,
  setLength,
}) => {
  const strength = calculatePasswordStrength(password);

  const criteria: { label: string; valid: boolean; name?: CheckBoxValue }[] = [
    { label: 'At least 12 characters', valid: password.length >= 12 },
    {
      label: 'Uppercase letters',
      valid: /[A-Z]/.test(password),
      name: CheckBoxValue.uppercase,
    },
    {
      label: 'Lowercase letters',
      valid: /[a-z]/.test(password),
      name: CheckBoxValue.lowercase,
    },
    {
      label: 'Numbers',
      valid: /[0-9]/.test(password),
      name: CheckBoxValue.numbers,
    },
    {
      label: 'Symbols',
      valid: /[^A-Za-z0-9]/.test(password),
      name: CheckBoxValue.symbols,
    },
  ];

  return (
    <Box>
      <List disablePadding>
        {criteria.map((criterion, index) => (
          <ListItem key={index} disableGutters>
            <ListItemIcon>
              {criterion.valid ? (
                <CheckIcon color="primary" />
              ) : (
                <CloseIcon color="error" />
              )}
            </ListItemIcon>
            <ListItemText primary={criterion.label} />
            {checkBoxState && (
              <>
                {criterion.name ? (
                  <Checkbox
                    sx={{ padding: 0 }}
                    checked={checkBoxState[criterion.name]}
                    onChange={() => {
                      if (setCheckBoxState && criterion.name) {
                        setCheckBoxState({
                          ...checkBoxState,
                          [criterion.name]: !checkBoxState[criterion.name],
                        });
                      }
                    }}
                  />
                ) : (
                  <Slider
                    value={length}
                    onChange={(_, newValue) => setLength?.(newValue as number)}
                    min={1}
                    max={32}
                    step={1}
                    valueLabelDisplay="auto"
                    sx={{ width: 100 }}
                  />
                )}
              </>
            )}
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle1">{getStrengthLabel(strength)}</Typography>
      <LinearProgress
        variant="determinate"
        value={strength}
        sx={{
          height: 10,
          borderRadius: 4,
          '& .MuiLinearProgress-bar': {
            backgroundColor: getProgressColor(strength),
          },
        }}
      />
    </Box>
  );
};

export default PasswordStrengthChecker;
