
import React from 'react';
export default function NetworkList({ networks = [] }) {
  return <section aria-label="Fictional networks"><h2>Fictional access points</h2><ul>{networks.map(n =>
    <li key={n.id}><strong>{n.ssid}</strong> — {n.security} — channel {n.channel}</li>)}</ul></section>;
}
