import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Site } from './Site';

const root = document.getElementById('root')!;
if (root.hasChildNodes()) {
  hydrateRoot(root, <Site path={window.location.pathname} />);
} else {
  createRoot(root).render(<Site path={window.location.pathname} />);
}
