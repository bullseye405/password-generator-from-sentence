import React from 'react';
import { Box, Container, Stack, Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        // mt: 8,
        borderTop: 1,
        borderColor: 'divider',
        bgcolor: 'background.default',
      }}
    >
      <Container sx={{ py: 4 }}>
        <Stack spacing={3} alignItems="center">
          {/* Social Buttons */}
          <Stack direction="row" spacing={2}>
            <Button
              variant="text"
              size="small"
              startIcon={<GitHubIcon />}
              onClick={() =>
                window.open('https://github.com/bullseye405', '_blank')
              }
            >
              <Typography variant="button">GitHub</Typography>
            </Button>

            <Button
              variant="text"
              size="small"
              startIcon={<EmailIcon />}
              onClick={() =>
                window.open('mailto:bullseye405@gmail.com', '_blank')
              }
            >
              <Typography variant="button">Contact</Typography>
            </Button>

            <Button
              variant="text"
              size="small"
              startIcon={<LinkedInIcon />}
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/samir-prajapati-b9b589174/',
                  '_blank'
                )
              }
            >
              <Typography variant="button">LinkedIn</Typography>
            </Button>
          </Stack>

          {/* Footer Text */}
          <Stack spacing={1} alignItems="center">
            <Typography variant="body2" color="text.secondary">
              Built with React, TypeScript, and Tailwind CSS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Designed & Developed by Samir Prajapati
            </Typography>
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} PhraseLock. A portfolio project
              demonstrating secure password generation.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
