
import React from 'react';
const scenarios = [
  { id: 'deauth', label: 'Deauthentication concept' },
  { id: 'evilTwin', label: 'Rogue AP concept' },
  { id: 'dns', label: 'DNS spoofing concept' },
  { id: 'krack', label: 'KRACK concept' },
  { id: 'handshake', label: 'Demo handshake record' }
];
export default function AttackPanel({ onRun = () => {} }) {
  return <section aria-label="Simulated scenarios"><h2>Scenario lab</h2>
    {scenarios.map(s => <button key={s.id} onClick={() => onRun(s.id)}>{s.label} (simulation)</button>)}</section>;
}
