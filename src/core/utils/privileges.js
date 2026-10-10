
'use strict';

const os = require('node:os');

function getPrivilegeGuidance() {
  return {
    platform: os.platform(),
    elevated: null,
    message: 'This simulator does not require administrator privileges. No monitor mode or packet injection is attempted.'
  };
}

module.exports = { getPrivilegeGuidance };
