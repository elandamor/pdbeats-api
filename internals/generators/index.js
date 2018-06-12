/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const moduleGenerator = require('./module/index.js');


module.exports = (plop) => {
  plop.setGenerator('module', moduleGenerator);
  plop.addHelper('directory', (comp) => {
      fs.accessSync(path.join(__dirname, `../../src/schema/${comp}`), fs.F_OK);
      return `schema/${comp}`;
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
