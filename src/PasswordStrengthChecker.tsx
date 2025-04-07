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
import React, { useState } from 'react';

import { CheckBoxState, CheckBoxValue } from './utils';

interface PasswordStrengthCheckerProps {
  password: string;
  checkBoxState?: CheckBoxState;
  setCheckBoxState?: React.Dispatch<React.SetStateAction<CheckBoxState>>;
  length?: number;
  setLength?: React.Dispatch<React.SetStateAction<number>>;
}

const calculatePasswordStrength = (password: string): number => {
  let strength = 0;
  if (password.length >= 12) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[a-z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;
  return (strength / 5) * 100;
};

const PasswordStrengthChecker: React.FC<PasswordStrengthCheckerProps> = ({
  password,
  checkBoxState,
  setCheckBoxState,
  length,
  setLength,
}) => {
  const strength = calculatePasswordStrength(password);

  const getStrengthLabel = (strength: number): string => {
    if (strength === 100) return 'Strong';
    if (strength >= 60) return 'Medium';
    return 'Weak';
  };

  const getProgressColor = (strength: number): string => {
    if (strength === 100) return 'success.main';
    if (strength >= 60) return 'warning.main';
    return 'error.main';
  };

  const criteria: { label: string; valid: boolean; name?: CheckBoxValue }[] = [
    { label: 'At least 12 characters', valid: password.length >= 12 },
    {
      label: 'Contains uppercase letters',
      valid: /[A-Z]/.test(password),
      name: CheckBoxValue.uppercase,
    },
    {
      label: 'Contains lowercase letters',
      valid: /[a-z]/.test(password),
      name: CheckBoxValue.lowercase,
    },
    {
      label: 'Contains numbers',
      valid: /[0-9]/.test(password),
      name: CheckBoxValue.numbers,
    },
    {
      label: 'Contains symbols',
      valid: /[^A-Za-z0-9]/.test(password),
      name: CheckBoxValue.symbols,
    },
  ];

  return (
    <Box my={2}>
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
      <Typography variant="subtitle1">
        Password Strength: {getStrengthLabel(strength)}
      </Typography>
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
