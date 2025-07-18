/// <reference types="cypress"/>
const { defineConfig } = require('cypress');
/**
 * @type {Cypress.PluginConfig}
 */

const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    '.',
    'cypress/config',
    `${file}.json`
  );

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  env: {
    petStore: 'https://petstore.swagger.io/v2/',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || 'hml';

      return getConfigurationByFile(file);
    },
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 40000,
    responseTimeout: 30000,
    chromeWebSecurity: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'dd-mm-yyyy_HH-MM-ss'
    }
  },
});

