const spwanSync = require("node:child_process").spawnSync;

module.exports.spwanWrapper = (command, configObj) => {
  return spwanSync(command, configObj);
};
