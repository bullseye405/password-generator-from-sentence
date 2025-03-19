import React from 'react';
import {
  Box,
  LinearProgress,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

interface PasswordStrengthCheckerProps {
  password: string;
}

const calculatePasswordStrength = (password: string): number => {
  let strength = 0;
  if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[a-z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;
  return (strength / 5) * 100;
};

const PasswordStrengthChecker: React.FC<PasswordStrengthCheckerProps> = ({
  password,
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

  const criteria = [
    { label: 'At least 8 characters', valid: password.length >= 8 },
    { label: 'Contains uppercase letters', valid: /[A-Z]/.test(password) },
    { label: 'Contains lowercase letters', valid: /[a-z]/.test(password) },
    { label: 'Contains numbers', valid: /[0-9]/.test(password) },
    {
      label: 'Contains special characters',
      valid: /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <Box my={2}>
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
      <List>
        {criteria.map((criterion, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {criterion.valid ? (
                <CheckIcon color="primary" />
              ) : (
                <CloseIcon color="error" />
              )}
            </ListItemIcon>
            <ListItemText primary={criterion.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PasswordStrengthChecker;
