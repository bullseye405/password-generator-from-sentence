import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Box,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slider,
  Switch,
  Typography,
} from '@mui/material';
import React, { useRef, useState } from 'react';

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
  const [showValueLabel, setShowValueLabel] = useState(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleShowValueLabel = () => {
    setShowValueLabel(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setShowValueLabel(false), 1000);
  };

  const startChangingLength = (type: 'inc' | 'dec') => {
    if (!setLength) return;

    const updateLength = () => {
      setLength((prev) => {
        const current = prev ?? 1;
        const newVal =
          type === 'inc' ? Math.min(32, current + 1) : Math.max(1, current - 1);
        return newVal;
      });
      handleShowValueLabel();
    };

    // Step 1: do it once immediately
    updateLength();

    // Step 2: start interval after delay
    delayTimeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(updateLength, 100);
    }, 500); // 500ms delay before repeating
  };

  const stopChangingLength = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (delayTimeoutRef.current) {
      clearTimeout(delayTimeoutRef.current);
      delayTimeoutRef.current = null;
    }
  };

  const strength = calculatePasswordStrength(password);

  const criteria: { label: string; valid: boolean; name?: CheckBoxValue }[] = [
    { label: 'At least 16 characters', valid: password.length >= 16 },
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
                  <Switch
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
                  <Box display="flex" alignItems="center" gap={1}>
                    <IconButton
                      size="small"
                      onMouseDown={() => startChangingLength('dec')}
                      onMouseUp={stopChangingLength}
                      onMouseLeave={stopChangingLength}
                      onTouchStart={() => startChangingLength('dec')}
                      onTouchEnd={stopChangingLength}
                      disabled={length === 1}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Slider
                      value={length}
                      onChange={(_, newValue) =>
                        setLength?.(newValue as number)
                      }
                      min={1}
                      max={32}
                      step={1}
                      valueLabelDisplay={showValueLabel ? 'on' : 'auto'}
                      sx={{ width: 100 }}
                    />
                    <IconButton
                      size="small"
                      onMouseDown={() => startChangingLength('inc')}
                      onMouseUp={stopChangingLength}
                      onMouseLeave={stopChangingLength}
                      onTouchStart={() => startChangingLength('inc')}
                      onTouchEnd={stopChangingLength}
                      disabled={length === 32}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>
                )}
              </>
            )}
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle1">
        {password ? getStrengthLabel(strength) : ''}
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
