import React from 'react';
import ReactDOM from 'react-dom/client';

import { App, AppView } from './app';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

const view = (
  <React.StrictMode>
    <AppView state={new App()} />
  </React.StrictMode>
);

if (root.innerHTML == '') {
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(view);
} else {
  ReactDOM.hydrateRoot(root, view);
}
