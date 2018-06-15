/**
 * moduleExists
 *
 * Check whether the given module exists in the schema directory
 */

const fs = require('fs');
const path = require('path');

const modules = fs.readdirSync(path.join(__dirname, '../../../src/schema'));

function moduleExists(mod) {
  return modules.indexOf(mod) >= 0;
}

module.exports = moduleExists;
