const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },

    baseUrl: 'https://www.saucedemo.com/', 
    "chromeWebSecurity": false
  },
});
