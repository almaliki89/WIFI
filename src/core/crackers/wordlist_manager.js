
'use strict';

// Safe classroom-only toy list. Does not read external wordlists or attack network hashes.
const DEMO_WORDS = Object.freeze([
  'password', 'letmein', 'welcome123', 'classroom-demo',
  'correct-horse-battery-staple', 'sample-only-not-a-real-secret'
]);

function previewDemoWords(limit = 5) {
  const safeLimit = Math.max(1, Math.min(20, Number(limit) || 5));
  return DEMO_WORDS.slice(0, safeLimit);
}

function assessPassphrase(passphrase) {
  const value = String(passphrase || '');
  const length = value.length;
  const hasLower = /[a-z]/.test(value);
  const hasUpper = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSymbol = /[^A-Za-z0-9]/.test(value);
  let score = 0;
  if (length >= 12) score++;
  if (length >= 16) score++;
  if (hasLower && hasUpper) score++;
  if (hasNumber) score++;
  if (hasSymbol) score++;
  return {
    score,
    label: score >= 4 ? 'Stronger (guidance only)' : score >= 2 ? 'Moderate (guidance only)' : 'Weak (guidance only)',
    advice: 'Use a unique passphrase of 16+ characters. This is a heuristic, not a crack-time estimate.'
  };
}

module.exports = { previewDemoWords, assessPassphrase };
