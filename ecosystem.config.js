
const path = require('path');
module.exports = {
  apps : [{
    name: `bass`,
    script: 'index.js',
//    max_restarts: 5,
    cron_restart: "0 0 * * *"
  }]
};