
import React from 'react';
export default function SettingsModal({ open = false, onClose = () => {} }) {
  if (!open) return null;
  return <div role="dialog" aria-modal="true" aria-label="Settings">
    <h2>Lab settings</h2><p>This build uses fictional data and simulation-only scenarios.</p>
    <button onClick={onClose}>Close</button></div>;
}
