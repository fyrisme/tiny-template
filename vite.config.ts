import { defineConfig, PluginOption } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import * as ReactDOM from 'react-dom/server';
import React from 'react';

import { App, AppView } from './src/app';

export default defineConfig({
  plugins: [
    // tailwind config should now be done in css
    tailwindcss(),

    // note: disable this if pre-rendering is causing rehydration issues
    rehydrationSupportPlugin(),
  ],

  // make sure assets get linked correctly when deploying to a sub-path
  base: './',
});

// define a custom plugin that pre-renders the document with initial app state
// just replaces the root div with a server rendered version

function rehydrationSupportPlugin(): PluginOption {
  return {
    name: 'rehydration-support',
    transformIndexHtml(html) {
      const initialView = React.createElement(AppView, { state: new App() });
      const initialReactHtml = ReactDOM.renderToString(initialView);
      const wrappedRoot = `<div id="root">${initialReactHtml}</div>`;
      const newHtml = html.replace('<div id="root"></div>', wrappedRoot);
      return newHtml;
    },
  };
}
