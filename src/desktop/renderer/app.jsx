
import React from 'react';
import NetworkList from './components/NetworkList';
import AttackPanel from './components/AttackPanel';
import StatusBar from './components/StatusBar';

// Optional React reference component. The default Electron UI is dependency-free app.js.
export default function App({ networks = [], onRunScenario = () => {} }) {
  return <main><header><h1>WiFiHack3r Lab</h1><p>SIMULATION ONLY — fictional networks, no real radio actions</p></header>
    <NetworkList networks={networks} /><AttackPanel onRun={onRunScenario} /><StatusBar /></main>;
}
