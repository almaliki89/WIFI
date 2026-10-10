
'use strict';

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('wifiLab', Object.freeze({
  getState: () => ipcRenderer.invoke('lab:get-state'),
  runScenario: (id) => ipcRenderer.invoke('lab:run-scenario', id),
  assessPassphrase: (value) => ipcRenderer.invoke('lab:assess-passphrase', value),
  clearEvents: () => ipcRenderer.invoke('lab:clear-events'),
  exportReport: () => ipcRenderer.invoke('lab:export-report'),
  onEvent: (callback) => {
    if (typeof callback !== 'function') return () => {};
    const listener = (_event, payload) => callback(payload);
    ipcRenderer.on('lab:event', listener);
    return () => ipcRenderer.removeListener('lab:event', listener);
  }
}));
