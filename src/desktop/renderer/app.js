
'use strict';

const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (ch) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[ch]));

let state = { networks: [], events: [], scenarios: [], checklist: [], demoWords: [] };

function toast(message) {
  const node = $('#toast');
  node.textContent = message;
  node.classList.remove('hidden');
  window.setTimeout(() => node.classList.add('hidden'), 3200);
}

function renderNetworks() {
  $('#network-count').textContent = String(state.networks.length).padStart(2, '0');
  $('#network-rows').innerHTML = state.networks.map((network) => `
    <tr>
      <td><span class="network-name">${escapeHtml(network.ssid)}</span><span class="subline">${escapeHtml(network.bssid)}</span></td>
      <td class="security">${escapeHtml(network.security)}</td>
      <td>${network.channel}</td><td>${network.signal} dBm</td>
      <td class="status">${escapeHtml(network.status)}</td>
    </tr>`).join('');
}

function renderEvents() {
  $('#event-count').textContent = String(state.events.length).padStart(2, '0');
  $('#event-list').innerHTML = state.events.length ? state.events.slice(0, 8).map((event) => `
    <div class="event"><div class="event-time">${escapeHtml(event.time)}</div>
    <div><strong>${escapeHtml(event.title)} <span class="event-badge">SIMULATION</span></strong><p>${escapeHtml(event.detail)}</p></div></div>`).join('') : '<p>No events yet. Run a simulation to begin.</p>';
}

const quickScenarioData = [
  ['deauth', '↯', 'Deauthentication concept', 'Availability and PMF'],
  ['evilTwin', '⌁', 'Rogue AP concept', 'Look-alike network risks'],
  ['dns', '⇄', 'DNS spoofing concept', 'Name-resolution integrity'],
  ['krack', '◇', 'KRACK concept', 'Patching and key reinstallation'],
  ['handshake', '⌁', 'Demo handshake record', 'Fictional record only']
];

function scenarioButton(id, icon, title, subtitle) {
  return `<button class="quick-action" data-scenario="${escapeHtml(id)}"><span class="quick-icon">${icon}</span><span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(subtitle)}</small></span></button>`;
}

function renderQuickActions() {
  $('#quick-actions').innerHTML = quickScenarioData.map((item) => scenarioButton(...item)).join('');
}

function renderScenarios() {
  $('#scenario-cards').innerHTML = quickScenarioData.map(([id, , title, subtitle]) => {
    const scenario = state.scenarios.find((item) => item.id === id);
    const mitigation = scenario ? scenario.fix : subtitle;
    const description = {
      deauth: 'Explore the availability impact of forged disconnect messages at a conceptual level.',
      evilTwin: 'Learn how a look-alike network can abuse trust without creating an actual access point.',
      dns: 'Understand how incorrect name resolution can redirect users and how to reduce risk.',
      krack: 'Review the historic key-reinstallation issue and the importance of vendor patches.',
      handshake: 'Create a fictional lab record to discuss what a handshake represents.'
    }[id];
    return `<article class="scenario-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p><div class="mitigation"><strong>Mitigation:</strong> ${escapeHtml(mitigation)}</div><button class="button secondary" data-scenario="${escapeHtml(id)}">Run simulation</button></article>`;
  }).join('');
}

function renderChecklist() {
  $('#checklist').innerHTML = state.checklist.map((item, index) => `
    <label class="check-row"><input type="checkbox"><span>${escapeHtml(item)}<small>Mark when reviewed in your authorized environment. This checkbox is local to the current session.</small></span></label>`).join('');
}

async function runScenario(id) {
  try {
    const result = await window.wifiLab.runScenario(id);
    toast(`${result.title}: simulation completed.`);
    await refreshState();
  } catch (error) {
    toast(error.message || 'Could not run simulation.');
  }
}

async function refreshState() {
  state = await window.wifiLab.getState();
  renderNetworks();
  renderEvents();
  renderQuickActions();
  renderScenarios();
  renderChecklist();
}

function setView(view) {
  document.querySelectorAll('.view').forEach((element) => element.classList.add('hidden'));
  $(`#view-${view}`).classList.remove('hidden');
  document.querySelectorAll('.nav-item').forEach((button) => button.classList.toggle('active', button.dataset.view === view));
  const titles = { overview: 'Lab overview', scenarios: 'Scenario lab', passphrase: 'Passphrase guide', checklist: 'Hardening checklist' };
  $('#page-title').textContent = titles[view] || 'Lab overview';
}

document.addEventListener('click', async (event) => {
  const scenario = event.target.closest('[data-scenario]');
  if (scenario) return runScenario(scenario.dataset.scenario);
  const nav = event.target.closest('[data-view]');
  if (nav) return setView(nav.dataset.view);
});

$('#assess-btn').addEventListener('click', async () => {
  const phrase = $('#phrase').value;
  if (!phrase.trim()) return toast('Enter a fictional example phrase first.');
  try {
    const result = await window.wifiLab.assessPassphrase(phrase);
    const node = $('#phrase-result');
    node.innerHTML = `<strong>${escapeHtml(result.label)} — ${result.score}/5</strong><p>${escapeHtml(result.advice)}</p>`;
    node.classList.remove('hidden');
  } catch (error) {
    toast(error.message || 'Assessment failed.');
  }
});

$('#clear-events').addEventListener('click', async () => {
  await window.wifiLab.clearEvents();
  await refreshState();
  toast('Timeline cleared.');
});

$('#export-btn').addEventListener('click', async () => {
  try {
    const report = await window.wifiLab.exportReport();
    const blob = new Blob([report], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `wifihack3r-lab-report-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast('Simulation report exported.');
  } catch (error) {
    toast(error.message || 'Could not export report.');
  }
});

window.wifiLab.onEvent((event) => {
  state.events.unshift(event);
  state.events = state.events.slice(0, 100);
  renderEvents();
});

refreshState().catch((error) => toast(`Initialization error: ${error.message}`));
