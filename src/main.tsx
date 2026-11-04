import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Site } from './Site';

const root = document.getElementById('root')!;
if (root.hasChildNodes()) {
  hydrateRoot(root, <Site path={window.location.pathname} />);
} else {
  createRoot(root).render(<Site path={window.location.pathname} />);
}

// Font loading can move a prerendered section after the browser's first
// fragment jump. Realign once, unless the visitor has already interacted.
const initialHash = window.location.hash;
if (initialHash) {
  const controller = new AbortController();
  let interacted = false;
  const cancel = () => { interacted = true; };
  for (const event of ['wheel', 'touchstart', 'pointerdown', 'keydown']) {
    window.addEventListener(event, cancel, { once: true, passive: true, signal: controller.signal });
  }
  document.fonts.ready.then(() => requestAnimationFrame(() => {
    controller.abort();
    if (interacted || window.location.hash !== initialHash) return;
    try {
      document.getElementById(decodeURIComponent(initialHash.slice(1)))?.scrollIntoView({ behavior: 'instant', block: 'start' });
    } catch {
      // An invalid URL fragment should not interrupt the page.
    }
  }));
}
