import { inject } from '@vercel/analytics';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
      <SpeedInsights />
    </StrictMode>
  );
}

inject();
