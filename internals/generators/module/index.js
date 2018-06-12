/**
 * Module Generator
 */

/* eslint strict: ["off"] */

'use strict';

const moduleExists = require('../utils/moduleExists');

module.exports = {
  description: 'Add a module',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'user',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return moduleExists(value) ? 'A module with this name already exists' : true;
      }

      return 'The name is required';
    },
  }],
  actions: (data) => {
    // Generate index.js, index.test.js and styles.js.
    const actions = [{
      type: 'add',
      path: '../../src/schema/{{name}}s/{{name}}.resolver.ts',
      templateFile: './module/resolver.ts.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/schema/{{name}}s/{{name}}.service.ts',
      templateFile: './module/service.ts.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/schema/{{name}}s/{{name}}.spec.ts',
      templateFile: './module/spec.ts.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/schema/{{name}}s/schema.graphql',
      templateFile: './module/schema.graphql.hbs',
    }];

    return actions;
  },
};
