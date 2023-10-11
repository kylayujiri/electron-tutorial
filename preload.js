// preload script contains code that runs before the web page is loaded into the browser window
// preload has access to both DOM APIs and Node.js environment
// often used to expose privileged APIs to the renderer via the contextBridge API

// we can define global objects (like versions) through the contextBridge API
// so we can add features to our renderer that require privileged access

const { contextBridge, ipcRenderer } = require('electron');

// global functions and variables
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping')
});
