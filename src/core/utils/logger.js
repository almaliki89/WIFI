
'use strict';

const fs = require('node:fs');
const path = require('node:path');

function createLogger(logDir) {
  const safeDir = path.resolve(logDir);
  fs.mkdirSync(safeDir, { recursive: true });
  const logFile = path.join(safeDir, 'wifihack3r.log');

  function write(level, message, meta = {}) {
    const entry = {
      time: new Date().toISOString(),
      level,
      message: String(message).slice(0, 1000),
      meta
    };
    fs.appendFileSync(logFile, JSON.stringify(entry) + '\n', 'utf8');
    return entry;
  }

  return {
    info: (message, meta) => write('INFO', message, meta),
    warn: (message, meta) => write('WARN', message, meta),
    error: (message, meta) => write('ERROR', message, meta),
    file: logFile
  };
}

module.exports = { createLogger };
