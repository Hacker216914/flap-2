// Preload runs in an isolated context. We intentionally do not expose Node APIs
// to the renderer for security. This file is kept minimal but can be used
// to expose a safe API via contextBridge if needed.
const { contextBridge } = require('electron');

// Example: expose a safe 'appInfo' object to renderer (not strictly necessary).
contextBridge.exposeInMainWorld('appInfo', {
  name: 'Flappy - Flayric',
  version: '1.0.0'
});
